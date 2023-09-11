<template>
    <div class="navbar" id="navigation">
        <ul class="center-nav">
            <RouterLink to="create-news"><li><i class="fa-sharp fa-solid fa-chart-simple"></i>Create News</li></RouterLink>
            <RouterLink to="create-tour"><li><i class="fa-sharp fa-solid fa-chart-simple"></i>Create Tour</li></RouterLink>
            <RouterLink to="/myapp/admin/tour"><li><i class="fa-sharp fa-solid fa-chart-simple"></i>Tour</li></RouterLink>
        </ul>
        <ul class="bottom-nav">
            <hr>
            <li><i class="fa-solid fa-gear"></i><a href="#"> Settings </a></li>
            <li><i class="fa-solid fa-power-off"></i><a href="#"> Logout </a></li>
        </ul>
    </div>
</template>



