<!DOCTYPE html>
<html>
<head>

</head>
<body>

<nav id="">
        <ul>
            <li><a href="#home">Home</a></li>
            <!--<li><a href="#toc">Home</a></li>-->
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#data_import">Data Import</i></a></li>
                <ul>
                    <li><a href="#data_import#whatToImport">What To Import</a></li>
                    <li><a href="#data_import#howToImport">How To Import</a></li>
                </ul>
            <li><a href="#integration">Integration</a></li>
                <ul>
                    <li><a href="#integration#endpointConfiguration">Endpoint Configuration</a></li>
                    <li><a href="#integration#readConfiguration">Read Configuration</a></li>
                </ul>
            <li><a href="#notification">Notificaton</a></li>
            <li><a href="#organization">Organization</a></li>
            <li><a href="#report">Report</a></li>
            <li><a href="#security">Security</a></li>
                <ul>
                    <li><a href="#user">Users</a></li>
                        <ul>
                            <li><a href="#create_user">Create User</a></li>
                        </ul>
                    <li><a href="#changeMyPassword">Change Password</a></li>
                    <li><a href="#reset_unlock_user">Reset/Unlock User</a></li>
                    <li><a href="#user_group">User Groups</a></li>
                </ul>            
            <li><a href="#system">System</a></li>
            <li><a href="#workflow">Workflow</a></li>
            <li><a href="#workspace">Workspace</a></li>
        </ul>
</nav>

<script>
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}
</script>

</body>
</html>