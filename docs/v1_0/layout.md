 <nav id="sidebar" class="active">
        <!-- Sidebar content goes here -->
    </nav>

    <!-- Content -->
    <main>
        <!-- Main content goes here -->
    </main>

    <!-- Collapse button -->
    <button id="toggleSidebar">Toggle Sidebar</button>

    <!-- Custom JavaScript to handle sidebar toggling -->
    <script>
        const sidebar = document.getElementById("sidebar");
        const toggleButton = document.getElementById("toggleSidebar");

        toggleButton.addEventListener("click", () => {
            sidebar.classList.toggle("active");
        });
    </script>