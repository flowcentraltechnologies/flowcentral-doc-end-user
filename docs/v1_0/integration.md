# Integration
Integration allows your organization to manage a wide range of functions through seamlessly interconnected data exchanges and processes, enabling it to work more effectively and efficiently.  In the banking industry, for instance, by integrating customer accounts and loan application services with their mobile app, a bank can provide better customer satisfaction to existing consumers and attract new consumers by offering services through a new digital channel.<br><br>
In the flowCentral system, you can integrate your applications easily with legacy systems (existing backend applications) or external third-party services using configurable REST/SOAP components or custom components. This allows your system to send or receive information from different sources and facilitate data interaction.<br><br>
The system allows you to configure an endpoint and set up read configuration to read the files from an endpoint automatically.

## Endpoint Configuration
An endpoint is the point where external services can be integrated into the system. It connects the system to external third-party services or legacy systems. Different endpoints can be configured in the system, and these endpoints specify how an item is to be called. Types of endpoints include:
<ul>
    •	<b>Watched Folder:</b>  A user can invoke a service by placing a file in a folder, which is scanned at a defined interval.<br> 
    •	<b>REST:</b> A service can be invoked through Representational State Transfer (REST) requests sent from HTML pages. This means     you can invoke a form or file directly from a web page using a REST request.<br>
    •	<b>SOAP:</b> It specifies where the web services listener awaits incoming requests on the built-in HTTP service.<br>
</ul>
<img src="images/end_user_images/user_grid.png" alt="User form" style="border: 2px solid  gray;"><br>
<table>
    <tr>
        <th>Field</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Name</td>
        <td>Name of the endpoint</td>
    </tr>
    <tr>
        <td>Description</td>
        <td>Short information about the endpoint</td>
    </tr>
    <tr>
        <td>Endpoint Type</td>
        <td>File/Java Message Service (JMS)</td>
    </tr>
    <tr>
        <td>Endpoint</td>
        <td>The point of entry in a communication channel</td>
    </tr>
    <tr>
        <td>Status</td>
        <td>The status of the configured endpoint</td>
    </tr>
</table>

## Read Configuration
Read configurations are set to read files from an endpoint automatically. They can be scheduled to read incoming files or items at a particular time interval. 
