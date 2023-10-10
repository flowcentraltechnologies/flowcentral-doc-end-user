# System
<p id="system">
The system is the central controlling unit of the FlowCentral platform. This application streamlines the management of the platform.<br>
Many functions can be performed under this application, these functions can be performed using the applets under the system application, some of these functions are:<br>
    <ul>
      <li>Customize login page</li>
      <li>Manage system modules</li>
      <li>Create and manage sectors</li>
      <li>Schedule tasks for users with various roles</li>
      <li>Activate or deactivate dashboards</li>
      <li>Add and manage environment variables</li>
      <li>Add unique user credentials to manage access to the platform</li>
      <li>Keep a record of download logs</li>
      <li>Enable licensing</li>
      <li>View and manage system parameters</li>
      <li>Add new suggestions made by the members of the organization</li>
    </ul>
<br>
</p>

## Credentials
Credentials are the account login details of the platform users. It consists of a username and password that members of your organization need to access the platform. You can add new user credentials, update existing ones and generate a report of all available credentials. It also allows you to delete the credentials of users who are no longer part of your organization. This
### Add a new credential
To be able to manage the credentials of a user, the credential must exist. This section highlights the step-by-step process involved in adding new credentials for an existing user.
<br>
<ol>
    <li><b>Click the New button:</b><br>
      This is the first step in adding a new credential. On click of the Credential applet on the sidebar a grid comes up with records of existing credentials.<br> To add a new credential click the New button, this New button is located at the top-left part of the page. This button once clicked opens a blank form that contain the information needed for the credential creation.
    </li>
    <li><b>Fill the blank form: </b><br>
      Once the New button is clicked a new form comes up. This form contain mandatory fields that cannot be blank.<br>
        >Note: Any field with the red asterisk <span style="color: red;">*</span> is a mandatory field. And this asterisk means that the field is required to be filled before the form can be saved.<br><br>
        <br>
                 <img src="images/end_user_images/new_credential.png" alt="new credential" style="border: 2px solid  gray;"><br>
        <ul>
            •	<b>Name:</b> This is the new name you want to give the user.<br>
            •	<b>Description:</b> This is an overall description of the credential. It lets you know who or what the credentialis about.<br>
            •	<b>Username:</b> This is the username of the user that the new credential belongs to. This username can only become editable when the credential has been saved<br>
            •	<b>Password:</b> This is the password of the user that the new credential belongs to. This password can only become editable when the credential has been saved<br>            
            •	<b>Action Buttons:</b> The credential form also include some buttons, all with their individual actions.<br>
        <span style="margin-left: 40px;">o	Save: This button saves the form after all necessary fields have been filled.<br></span>
        <span style="margin-left: 40px;">o	Save and Next: This button saves the form and opens a new form.<br></span>
        <span style="margin-left: 40px;">o	Save and Close: This button saves and closes the form after saving.<br></span>
        <span style="margin-left: 40px;">o	Close: This button closes the form page once clicked.<br></span>
        </ul>
    </li>
    <li><b>Save your form:</b><br>
        After all fields in the form have been filled, the next step is to save the form. To save this form, click on the Save, Save and Next, or Save and Close (this depends on which saving method you decide to go with) button which is located both at the right-top and at the left-bottom of the form.
      <img src="images/end_user_images/save_cred.png" alt="User form" style="border: 2px solid  gray;"><br>
    </li>
</ol><br>

## Dashboards
The dashboard application displays the list of various dashboards available in the system while this dashboard applet under the system application allows you to manage the available dashboards. Dashboards can be activated or deactivated using this applet.<br><br>
On click of the Dashboard applet, a page comes up with a grid containing information of the various dashboards available in the system. This page also provide a dropdown list of actions that can be performed on the selected dashboard.<br>
        <img src="images/end_user_images/manage_dashboard.png" alt="User form" style="border: 2px solid  gray;"><br>
        <table>
            <tr>
                <th>Name of Field</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>Application Name</td>
                <td>Name of the application where this dashboard is located in the system</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>The dashboard name</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>This gives an insight of what the dashboard is about</td>
            </tr>
            <tr>
                <td>Status</td>
                <td>This shows if the dashboard is Active, Inactive, or Dormant</td>
            </tr>
            <tr>
                <td>Choose action to apply</td>
                <td>This is a dropdown list of actions that can be performed on the selected dashboard<br>
                    <span style="margin-left: 40px;">•Activate: This action activates the selected dashboard. Once action has been applied to the selected dashboard this dashboard comes up on the dashboard application.<br></span>
                    <span style="margin-left: 40px;">•Deactivate: This action deactivates the selected dashboard. Once action has been applied to the selected dashboard, this dashboard will no longer appear in the dashboard application.<br></span>                
                </td>
            </tr>
            <tr>
                <td>Apply to Selected Item</td>
                <td>On click of this button, the selected action is applied to the selected dashboard</td>
            </tr>
        </table>
        
## Download Logs
The download log keeps track of all the resources downloaded from the system. Users can access the system’s resources, such as documents, images, and files. It is essential because it help organizations to monitor all download engagements associated with resources and records information such as the user’s IP address, computer name, and when the download occurred. It records “who” downloads “what” and “when”.<br><br>
On click of the applet a grid comes up with columns containing information of the download logs
        <img src="images/end_user_images/download_log.png" alt="User form" style="border: 2px solid  gray;"><br>
        <table>
            <tr>
                <th>Name of Field</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>S/N</td>
                <td>A serial number assigned to uniquely identify each download log.</td>
            </tr>
            <tr>
                <td>Resource Name</td>
                <td>The name of the downloaded resource, typically a file, image, or document.</td>
            </tr>
            <tr>
                <td>Remote Address</td>
                <td>The IP address of the user's device or computer that initiated the download.</td>
            </tr>
            <tr>
                <td>Remote Host</td>
                <td>The name or identifier of the user's computer or device used to access and download the file.</td>
            </tr>
            <tr>
                <td>Created On</td>
                <td>The date when the resource was initially downloaded or created in the system.</td>
            </tr>
            <tr>
                <td>Updated On</td>
                <td>The date of the most recent update or modification made to the resource.</td>
            </tr>
        </table>

## Environment Variables
Environment variables are fundamental components used to configure software applications on the system. They are essential to the operating environment in which these applications function.<br> In a similar way that one's surroundings influence a person, environment variables play a crucial role in shaping the conditions under which software applications operate. These variables are characterized by their configurability, allowing for dynamic adjustments as needed.
### Add an Environment Variable
This section highlights the step-by-step process involved in adding a new environmental variable.
<br>
<ol>
    <li><b>Click the New button:</b><br>
      This is the first step in adding a new variable. On click of the Environmental Variable applet on the sidebar a grid comes up with records of existing environmental variable.<br> To add a new variable click the New button, this New button is located at the top-left part of the page. This button once clicked opens a blank form that contain the information needed for the variable creation.
    </li>
    <li><b>Fill the blank form: </b><br>
      Once the New button is clicked a new form comes up. This form contain mandatory fields that cannot be blank.<br>
        >Note: Any field with the red asterisk <span style="color: red;">*</span> is a mandatory field. And this asterisk means that the field is required to be filled before the form can be saved.<br><br>
        <br>
                 <img src="images/end_user_images/new_variable.png" alt="new credential" style="border: 2px solid  gray;"><br>
        <ul>
            •	<b>Name:</b> This is the name you want to give the new variable. For example "DATABASE_URL"<br>
            •	<b>Value:</b> This is the actual information or data it holds. It's what makes the environment variable useful. For example, if "DATABASE_URL" environment variable has a value of "mysql://username:password@hostname:port/database_name," this value contains the connection information for a database.<br>
            •	<b>Description:</b> This is a short description of the variable. It gives a brief explanation of what it is.<br>
            •	<b>Action Buttons:</b> The form also include some buttons, all with their individual actions.<br>
        <span style="margin-left: 40px;">o	Save: This button saves the form after all necessary fields have been filled.<br></span>
        <span style="margin-left: 40px;">o	Save and Next: This button saves the form and opens a new form.<br></span>
        <span style="margin-left: 40px;">o	Save and Close: This button saves and closes the form after saving.<br></span>
        <span style="margin-left: 40px;">o	Close: This button closes the form page once clicked.<br></span>
        </ul>
    </li>
    <li><b>Save your form:</b><br>
        After all fields in the form have been filled, the next step is to save the form. To save this form, click on the Save, Save and Next, or Save and Close (this depends on which saving method you decide to go with) button which is located both at the right-top and at the left-bottom of the form.
      <img src="images/end_user_images/save_cred.png" alt="User form" style="border: 2px solid  gray;"><br>
    </li>
</ol><br>

## Licensing
A license is an official permission to use, own or do something. In this case, a license is granted by FlowCentral Technologies to your organization. This section is intended to help you understand the FlowCentral editions and the various entitlements and restrictions associated with each edition. Currently, there are two editions of the FlowCentral platform:<br>
    <span style="margin-left: 40px;">
       <b> 1.	Standard:</b>
            The standard edition is a perfect place to start designing and developing applications. You would get access to applications such as dashboard, organization, workflow, report, security, notification, integration, table designer, form designer, and workflow designer.
    </span><br>
    <span style="margin-left: 40px;"
      <b>  2.	Enterprise</b>
        The enterprise edition is our enterprise-grade offering, with more powerful features, support, and services. You will enjoy a more personalized and unlimited experience and access to more features like workspace, report designer, dashboard designer, and collaboration. 
    </span><br>
        The following tables provide a detailed comparison of the two editions.
        <table style="align-item:center;">
            <tr>
                <th>Features</th>
                <th>Standard</th>
                <th>Enterprise</th>
            </tr>
            <tr>
                <td>Dashboard</td>
                <td><i class="fas fa-check">Yes</i></td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Organization</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Workflow</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Reporting</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Security</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Notification</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Integration</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Workspaces</td>
                <td>No</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Collaboration</td>
                <td>No</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Table Designer</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Form Designer</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Workflow Designer</td>
                <td>Yes</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Report Designer</td>
                <td>No</td>
                <td>Yes</td>
            </tr>
            <tr>
                <td>Dashboard Designer</td>
                <td>No</td>
                <td>Yes</td>
            </tr>
        </table>
        
### Generate License Request
To get a License for a specific edition, a formal request must be initiated by an authorized user to access and use the license. Here is how to achieve this:
<ol>
    1.	Click the “Generate License Request” button: 
    This is the first step in initiating an official request. This button is located on the top-right part of the “License” applet page.
                <img src="images/end_user_images/Generate_license.png" alt="ui.png;"><br>
    2.	Fill the new form: 
    Once the New button is clicked a new form pops up. This form contains mandatory fields that cannot be blank
                <img src="images/end_user_images/license_form.png" alt="ui.png;"><br>
        <table border="1">
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Client Title</td>
            <td>This field is used to identify the requester formally. This can be the name or designation of the requester.</td>
          </tr>
          <tr>
            <td>FlowCentral Account</td>
            <td>This is the account associated with the software or service for which the license request is being made.</td>
          </tr>
        </table>
    3.	Initiate Request Generation:
    This is done by clicking the Generate button (the blue button at the bottom of the form). When this button is clicked a License request is automatically downloaded on your computer.<br>
</ol><br>

### Load License
This is simply uploading the License into the system. Here is how to achieve this:
<ol>
    1. Click the “Load License” button: 
    To load the license into the system click the “Load License” button. This button is located on the top-right part of the “License” applet page.
                <img src="images/end_user_images/load_license.png" alt="ui.png;"><br>
    2. Select File: 
    Once the load license button has been clicked a form pops up with a browse option, this lets you browse your computer to select the license file. After selecting the license file, click the “Load” button to upload the selected license file into the system.
                <img src="images/end_user_images/loadBTN_license.png" alt="ui.png;"><br>
    3. Confirmation: 
    After uploading the file by clicking the Load button, a notification should pop up indicating whether the upload was successful or unsuccessful.

</ol><br>

## Modules
A module is a component of the system dedicated to a specific business function or process. It is a group of applications with similar functions. Each module is designed for a particular need, making it easy to meet the shifting needs of the organization.<br> 
As the organization evolves, the modules related to a business process can be simply added to address new requirements. This means that the organization's exact system can be simply built. Each module displays the system characteristics and applications that are associated with it. The system includes modules such as the chart module, notification module, system module, report module, and organization module.<br>
### Module details
This section provide details of the information each module entails. On click of the applet a grid comes up with a table containing the information of the modules.<br>
        <div class="centered-container">
            <p class="div1 left">
                <img src="images/end_user_images/module_grid.png" alt="ui.png;"><br>
            </p>
        </div>
<br>
>Note: Each column contains the category of each information and the row contains the different modules available in the system
<br>

This grid only show some of the information of the module. To check all other information you have to open the module you want to check, and to do this: 
    <ol>
        <li><b>Hover:</b> Move your cursor and hover over the name/description of the module you want to check. When you do this the text color of name/description changes to blue with an under line (like that of a link)</li>
        <li><b>Click:</b> Click the name/description. On click of the name/description a page comes up with the information of the module selected.</li>
    </ol>
        <div class="centered-container">
            <p class="div1 left">
                <img src="images/end_user_images/module_app.png" alt="ui.png;"><br>
            </p>
        </div>The detail of the module has been sectioned into three and these sections all contain information of the selected module.
#### Module Form (Section A)
This is the form section, it is the main form and it contain the main information of the module.
        <div class="centered-container">
            <p class="div1 left">
                <img src="images/end_user_images/module_A.png" alt="ui.png;"><br>
            </p>
        </div>
        <table>
            <tr>
                <th>Name of Field</th>
                <th>Description</th>
            </tr>
            <tr>
                <td>Name</td>
                <td>The name of the module</td>
            </tr>
            <tr>
                <td>Description</td>
                <td>Identifies the name as a module</td>
            </tr>
            <tr>
                <td>Short Code</td>
                <td>Module identifier</td>
            </tr>
            <tr>
                <td>Sector</td>
                <td>The sector the module belongs to</td>
            </tr>
            <tr>
                <td>Label</td>
                <td>Makes the module easy to locate</td>
            </tr>
        </table>
#### Audit (Section B)
This is the audit section, this section is automatically filled with the details of the owner of the account used in creating or making changes to the module.
        <div class="centered-container">
            <p class="div1 left">
                <img src="images/end_user_images/module_B.png" alt="ui.png;"><br>
            </p>
        </div>
This section is automatically filled by the system with the details of the account used in creating, inspecting or modifying this account. These details include:
        <img src="images/end_user_images/audit.jpg" alt="User form" style="border: 2px solid  gray;"><br>

<table>
    <tr>
        <th>Name of Field</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Created By</td>
        <td>This is the name of the person who created this account.</td>
    </tr>
    <tr>
        <td>Updated By</td>
        <td>This is the name of the last person that updated this account.</td>
    </tr>
    <tr>
        <td>Created On</td>
        <td>This is the date and time that this user’s account was created.</td>
    </tr>
    <tr>
        <td>Updated On</td>
        <td>This is the date and time that the last update was made on this user’s account.</td>
    </tr>
</table>
</p><br>

#### Child Tab Update (Section C)
This is the child tab section. This section only comes up after the main form has been saved.
        <div class="centered-container">
            <p class="div1 left">
                <img src="images/end_user_images/module_C.png" alt="ui.png;"><br>
            </p>
        </div>
##### System Parameters
These are the various system parameters specific to this module. Go to <a href="system.md#systemParameter">System Parameters</a> to know more about these parameters.
This child tab shows information about the system parameters related to a particular module, the rows contain different parameters, while the column are the categories in which the informations have been classified
        <div class="centered-container">
            <p class="div1 left">
                <img src="images/end_user_images/module_parameters.png" alt="ui.png;"><br>
            </p>
        </div>
        <table border="1">
          <tr>
            <th>Name of Field</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Code</td>
            <td>This is the unique identifier for a specific item</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>A brief description of what the item is about</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>This is the datatype in which the item is categorized under. Datatypes like String, Boolean, Integer, and so on.</td>
          </tr>
          <tr>
            <td>Value</td>
            <td>The information that the item holds. This value depends on the Type. For example:</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <ul>
                <li>If Type = String, then Value = Client Title</li>
                <li>If Type = Boolean, then Value = True</li>
                <!-- Add more examples as needed -->
              </ul>
            </td>
          </tr>
          <tr>
            <td>Module</td>
            <td>The module to which the item is specific</td>
          </tr>
          <tr>
            <td>Updated By</td>
            <td>The name of the user who made the last update on this item</td>
          </tr>
          <tr>
            <td>Updated On</td>
            <td>This is the date and time that the last update was made.</td>
          </tr>
        </table>
##### Module Applications
This is the child tab that contains the list of the applications available for each module
        <div class="centered-container">
            <p class="div1 left">
                <img src="images/end_user_images/module_parameters.png" alt="ui.png;"><br>
            </p>
        </div>
        <table border="1">
          <tr>
            <th>Name of Field</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>Module Label</td>
            <td>The name of the module.</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>This is the name of the application. It helps to uniquely identify the application within the system.</td>
          </tr>
          <tr>
            <td>Short Description</td>
            <td>Provides a concise and clear description of the application's purpose and functionality.</td>
          </tr>
          <tr>
            <td>Long Description</td>
            <td>An in-depth and detailed description of the application, its features, and how it fits into the overall system.</td>
          </tr>
          <tr>
            <td>Configuration File</td>
            <td>Specifies the sector or category to which the module belongs. It helps organize and categorize applications for easier management.</td>
          </tr>
          <tr>
            <td>Auto Install</td>
            <td>When enabled, this option simplifies the process of locating and installing the application.</td>
          </tr>
          <tr>
            <td>Created On</td>
            <td>Indicates the date when the module was initially created or added to the system.</td>
          </tr>
          <tr>
            <td>Updated On</td>
            <td>This is the date and time that the last update was made on this user’s account.</td>
          </tr>
        </table>
## Scheduled Task History
This applet displays the record of scheduled tasks in the system. It shows the task schedule, its name, start date, finish date, and the task's status.
            <p class="left">
                <img src="images/end_user_images/schedule_history.png" alt="ui.png;"><br>
            </p>
        <table>
          <thead>
            <tr>
              <th>Name of Field</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>S/N</td>
              <td>Serial Number</td>
            </tr>
            <tr>
              <td>Scheduled Task</td>
              <td>The scheduled activity</td>
            </tr>
            <tr>
              <td>Task Name</td>
              <td>Name of the task</td>
            </tr>
            <tr>
              <td>Started On</td>
              <td>Start Date</td>
            </tr>
            <tr>
              <td>Finished On</td>
              <td>End Date</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>This shows if the scheduled task is Active, Inactive, or Dormant</td>
            </tr>
          </tbody>
        </table>
## Scheduled Tasks
A scheduled task helps to perform automated activities in the system. It allows users to create timed actions without any user input. These actions can be executed periodically based on the form's set time and date values. A scheduled task can be set up to send meeting details to employees, send automated emails, set project deadlines, and more. A scheduled task has an event or time-based trigger to know when to start a task, and the action that task would perform. Tasks can be set to run at specified intervals (seconds, minutes, hours). This saves time and increases the overall efficiency of the organization.

### Schedule a task
section highlights the step-by-step process involved in scheduling a task:
<ol>
       <li><b>1. Click the New button: </b>
        This is the first step in creating a new user. The New button is located at the top-right part of the page. This button opens a blank form that contains all the information needed to schedule a task.
        </li>
        <li><b>2. Fill the form: </b>
        Once the New button is clicked a new form comes up. This form contains some mandatory fields that cannot be blank and also some other fields that are not mandatory and can be blank because they are optional fields.
        </li>
</ol>


## Sectors
A sector is a group of modules in the system. It visually represents the organization’s activities by grouping all related applications into a sector. A color theme can differentiate each sector. <br> 
Sectors ease the management of applications. For example, ShowCase Business Enterprise is a financial organization with 60 applications. They have different applications for business activities such as lending, internet banking, cash flow management, and investing. There are 15 applications running for each business activity, totaling 60 applications. The system can help to organize all the applications under each action into different sectors, thereby providing a quick visual representation of all the organization’s activities.

## Suggestions
Suggestions return a list of suggested search terms that are relevant to a search experience. It suggests words as you type based on your history. Users can find what they’re looking for in the system with the search box. The search box needs to be effective in helping users find content quickly, which is why this feature is part of the system. You can add new suggestions to the system by adding the Suggestion Type ID and the suggested text.
        <div class="centered-container">
            <p class="div1 left">
                <img src="images/end_user_images/suggestion_form.png" alt="ui.png;"><br>
            </p>
        </div>
<table>
    <tr>
        <th>Name of Field</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Suggestion Type ID</td>
        <td>Suggestion type identifier. This field is a database search field, this field searches the system database for the typed word. To see a list of available options without typing, click the field and press ypur keyboard's spacebar.</td>
    </tr>
    <tr>
        <td>Suggestion</td>
        <td>The suggested text, this is like an idea for consideration</td>
    </tr>
</table>


## System Parameters
<p id="systemParameters">
    System parameters are built-in values of applications in the system that allow users to control the behavior of the system. They help configure system-specific data, application server file locations, user access, and other administration-controlled data. 
    System parameters are a great way to customize the system applications, and they are configured during the installation of the system with editable values.<br>
    Only system administrators and users with admin privileges can control system parameters. Changes to an application’s parameters may affect the performance of the whole system.<br>
    <table>
      <thead>
        <tr>
          <th>Name of Field</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Module</td>
          <td>Each module has its system parameters</td>
        </tr>
        <tr>
          <td>Code</td>
          <td>A unique identifier of the parameter</td>
        </tr>
        <tr>
          <td>Description</td>
          <td>Short information about what the parameter is for</td>
        </tr>
        <tr>
          <td>Value</td>
          <td>The parameter’s value</td>
        </tr>
      </tbody>
    </table>
</p>
## Tenants
## UI Options
The User Interface Options (UI Options) component of the system allows users to customize the presentation of the user interface and content resources of the login page so that they can be personalized to individual user needs and general organizational preferences.

### Customize the User Interface
This section highlights the step-by-step process involved in customizing the interface of the login page and also describes what each field means.
<br>
</p>
<ol>
  <li><b>Click the UI Option applet on the sidebar:</b><br>
      This is the first step in customizing the interface. This applet is located on the sidebar menu on the left side of the system. Once this applet is clicked a blank form comes up, this form contains all the information needed for customization of the interface.
        <img src="images/end_user_images/ui_options.png" alt="ui.png;"><br>
      </li>
    <li><b>Fill the new User form: </b><br>
        This form contains fields for the collection of information needed to customize the that is being created, these fields are:
        <br>
        <div class="centered-container">
            <p class="div1 left">
                <img src="images/end_user_images/ui.png" alt="ui.png;"><br>
            </p>
        </div>        
        <br>
        <table border="1">
          <thead>
            <tr>
              <th>Name of Field</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title</td>
              <td>The login page title</td>
            </tr>
            <tr>
              <td>Subtitle</td>
              <td>The login page subtitle</td>
            </tr>
            <tr>
              <td>Header Image</td>
              <td>The image above the title</td>
            </tr>
            <tr>
              <td>Background Image</td>
              <td>The background image of the login page</td>
            </tr>
          </tbody>
        </table>
    </li>
    <li>
        <li><b>Save your form:</b><br>
    </li>
</ol>
