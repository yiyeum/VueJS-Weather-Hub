<template>
    <div class="hubHeader text-center">
        <p class="hubSmallTitle">Welcome to</p>
        <p class="hubTitle"><router-link to="/">Weather Hub</router-link></p>

        <nav class="navbar navbar-expand-lg">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <router-link to="/">Vancouver Now</router-link>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <li class="nav-item">
                    <router-link to="/searchWeather">Search Weather</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default{}
</script>

<style>
    .hubHeader {
        padding-top: 3.5%;
        padding-bottom: 3.5%;
        line-height: 0.8;
        background-color: #e6ffee;
    }

    .hubSmallTitle {
        font-size: 20px;
    }

    .hubTitle {
        font-size: 50px;
        letter-spacing: 9px;
        margin-bottom: 2%;
    }

    .hubTitle a:hover{
        color: #595959;
        text-decoration: none;
    }

    ul.navbar-nav{
        margin: 0 auto;
    }

    nav.navbar ul.navbar-nav li.nav-item a{
        padding: 3px;
        color: #a6a6a6;
    }

    nav.navbar ul.navbar-nav li.nav-item a:hover{
        color: #4d4d4d;
        text-decoration: none;
    }

</style>