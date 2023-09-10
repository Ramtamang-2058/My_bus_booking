from django.contrib import admin
from django.contrib.auth.models import Group, User
from .models import Route, LoggedUser, Ticket, NewsLetter, SystemInfo, Contact, EmailVerify, FAQ
from django.utils.translation import ngettext
from django.contrib import messages
import logging
from django.contrib.admin.models import LogEntry, DELETION
from django.utils.html import escape
from django.urls import reverse
from django.utils.safestring import mark_safe
from django.utils import timezone
from rangefilter.filter import DateRangeFilter, DateTimeRangeFilter

logging.disable(logging.NOTSET)
admin.site.unregister(Group)
admin.site.index_template = '../../ui/templates/admin/base_site.html'
class RouteAdmin(admin.ModelAdmin):
    list_display = ('name', 'departureLocation', 'destinationLocation', 'price', 'departureDate', 'departureTime','arrivalTime' ,'vehicleID')
    ordering= ['-departureDate','departureTime','price']
    search_fields = ('name', 'departureLocation', 'destinationLocation')
    list_filter =(('departureDate', DateRangeFilter),)
    fieldsets = (
        ('Bus Information', {
            'fields': ('name','vehicleID')}
        ),
        ('Route Information', {
            'fields': ('departureLocation', 'destinationLocation', 'price')}
        ),
        ('Departure Information', {
            'fields': ('departureDate', 'departureTime', 'arrivalTime')}
        ),

    )
admin.site.register(Route,RouteAdmin)

class LoggedAdmin(admin.ModelAdmin):
    list = ('username')
    admin.site.register(LoggedUser)

class EmailVerifyAdmin(admin.ModelAdmin):
    list_display = ('username',)
admin.site.register(EmailVerify,EmailVerifyAdmin)

class TicketAdmin(admin.ModelAdmin):
    list_display = ('username','routeId','bookedSeat1','bookedSeat2','payment','amount', 'destinationLocation','departureLocation','arrivalTime','departureTime','departureDate','vehicleID','booked_date')
    ordering = ('-booked_date','departureDate','arrivalTime')
    search_fields = ('username','vehicleID','departureLocation','destinationLocation')
    list_filter = (('departureDate',DateRangeFilter),('booked_date',DateRangeFilter),'booked_date')
    fieldsets = (
        ('User Information', {
            'fields': ('username',)}
        ),
        ('Route Information', {
            'fields': (('routeId','vehicleID'),)}
        ),
        ('Booked Seats', {
            'fields': ('bookedSeat1','bookedSeat2')}
        ),
        ('Payment', {
            'fields': (('amount','payment'),)}
        ),
        ('Departure & Arrival Information', {
            'fields': ('departureLocation','destinationLocation','departureTime','arrivalTime','departureDate')}
        ),
    )
admin.site.register(Ticket,TicketAdmin)

class NewsLetterAdmin(admin.ModelAdmin):
    list_display = ('email','subscribed_date')
admin.site.register(NewsLetter,NewsLetterAdmin)

class SystemInfoAdmin(admin.ModelAdmin):
    list_display = ('about','weblink')
admin.site.register(SystemInfo,SystemInfoAdmin)

class ContactAdmin(admin.ModelAdmin):
    list_display = ('name','email','message','contacted_date','last_updated','status')
    list_filter = ('name',)
    
    actions= ['make_replied','make_read','make_unread']
    
    def has_add_permission(self, request, obj=None):
        return False

    @admin.action(description='Mark selected as Replied')
    def make_replied(self, request, queryset):
        updated = queryset.update(status='replied',last_updated=timezone.now())
        self.message_user(request, ngettext(
            '%d message was successfully marked as replied.',
            '%d messages were successfully marked as replied.',
            updated,
        ) % updated, messages.SUCCESS)

    @admin.action(description='Mark selected as Read')
    def make_read(self, request, queryset):
        updated = queryset.update(status='read',last_updated=timezone.now())
        self.message_user(request, ngettext(
            '%d message was successfully marked as read.',
            '%d messages were successfully marked as read.',
            updated,
        ) % updated, messages.SUCCESS)
    
    @admin.action(description='Mark selected as Unread')
    def make_unread(self, request, queryset):
        updated = queryset.update(status='unread',last_updated=timezone.now())
        self.message_user(request, ngettext(
            '%d message was successfully marked as unread.',
            '%d messages were successfully marked as unread.',
            updated,
        ) % updated, messages.SUCCESS)

admin.site.register(Contact,ContactAdmin)


class LogEntryAdmin(admin.ModelAdmin):
    date_hierarchy = 'action_time'

    list_filter = [
        'user',
        'content_type',
        'action_flag'
    ]

    search_fields = [
        'object_repr',
        'change_message'
    ]

    list_display = [
        'action_time',
        'user',
        'content_type',
        'object_link',
        'action_flag',
    ]

    def has_add_permission(self, request):
        return False

    def has_change_permission(self, request, obj=None):
        return False

    def has_delete_permission(self, request, obj=None):
        return False

    def has_view_permission(self, request, obj=None):
        return request.user.is_superuser

    def object_link(self, obj):
        if obj.action_flag == DELETION:
            link = escape(obj.object_repr)
        else:
            ct = obj.content_type
            link = '<a href="%s">%s</a>' % (
                reverse('admin:%s_%s_change' % (ct.app_label, ct.model), args=[obj.object_id]),
                escape(obj.object_repr),
            )
        return mark_safe(link)
    object_link.admin_order_field = "object_repr"
    object_link.short_description = "object"

admin.site.register(LogEntry, LogEntryAdmin)

class FAQAdmin(admin.ModelAdmin):
    list_display = ('question','answer')
admin.site.register(FAQ,FAQAdmin)