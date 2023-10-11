# Notification
Notifications are messages sent to alert a user when an event occurs.
Short Mail Service (SMS), email, and system notifications can be configured and sent when a new form is submitted, when existing form data is deleted or modified, or by triggering custom actions from reports. When a notification script is triggered, custom notifications are sent to a phone number, an email address, or a particular system. 

## Notification channel
A notification channel is a communication method or medium through which information is relayed to individuals or users to keep them informed and updated about certain events or data entering or leaving the system. The three available notification channels are:
<ol>
    <li><b>System notification</b>
        System notifications alert users in the system without any particular request from the user. They can be configured by selecting when to send them, setting criteria to be met, and selecting users that the notifications will be sent to.
    </li>
    <li><b>Email notification</b>
        Email notifications can be used to alert users when a new user account is added or when there’s an activity in a form. For example, you can trigger an email notification when a new record has been successfully added to the database.
    </li>
    <li><b>SMS notification</b>
        SMS notifications allow you to configure and send customized text messages to the administrators or users every time they submit a new form or when an existing form is modified or deleted.
    </li>
</ol>

## Channel Settings
This section highlight the configuration process of channel settings in.<br>
The system does not have direct access to the internet, therefore, a mail server is needed for this function. The Simple Mail Transfer Protocol (SMTP) Server is used for email transmission from the sender to the recipients. A correct settings configuration is required for the process to work. The Edit button directs the user to the notification channel settings form.
