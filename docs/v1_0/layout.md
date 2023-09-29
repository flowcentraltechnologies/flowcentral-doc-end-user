 <nav id="sidebar" class="active">
    <ul>
        <li><a href="#home.md">Getting started</a></li>
        <li>
            <a  href="#dashboard">Dashboard</a>
            <ul class="collapse">
                <li> </li>
            </ul>
        </li>
        <li><a href="#data_import.md">Data Import</a>
            <ul class="collapse">
                <li><a href="#data_import.md#whatToImport">What to Import</a></li>
                <li><a href="#.md#howToImport">How to Import</a></li>
            </ul>
        </li>
        <li><a href="organization.md">Organization</a>
            <ul class="collapse">
                <li><a href="organization.md#zone">Zone</a></li>
                <li><a href="organization.md#branch">Branch</a></li>
                <li><a href="organization.md#department">Department</a></li>
                <li><a href="organization.md#role">Role</a></li>
                <!-- Leave this empty to create a collapsible section without a link -->
            </ul>
        </li>
        <li><a href="report.md">Report</a></li>
        <li><a href="security.md">Security</a>
            <ul class="collapse">
                <li><a href="user.md">User</a>
                    <ul class="collapse">
                        <li><a href="create_user.md">Create User</a></li>
                        <li><a href="user_child_tab.md">Child Tab Update</a></li>
                    </ul>
                </li>
                <li><a href="user_group.md">User Group</a></li>
                <li><a href="reset_unlock_user.md">Reset/Unlock User</a></li>
                <li><a href="security.md#changePassword">Change My Password</a></li>
            </ul>
        </li>
        <li><a href="integration.md">Integration</a></li>
        <li><a href="notification.md">Notification</a></li>
        <li><a href="workflow.md">Workflow</a></li>
        <li><a href="workspace.md">Workspace</a></li>
    </ul>
</nav>
    <button id="toggleSidebar">Toggle Sidebar</button>
<script>
        const sidebar = document.getElementById("sidebar");
        const toggleButton = document.getElementById("toggleSidebar");
        toggleButton.addEventListener("click", () => {
            sidebar.classList.toggle("active");
        });
</script>