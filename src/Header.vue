<template>
    <div class="hubHeader text-center">
        <p class="hubSmallTitle">Welcome to</p>
        <p class="hubTitle">Weather Hub</p>

        <nav class="navbar navbar-expand-lg">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Local Weather</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Search Weather</a>
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
        margin-top: 5%;
        line-height: 0.8;
    }

    .hubSmallTitle {
        font-size: 20px;
    }

    .hubTitle {
        font-size: 50px;
        letter-spacing: 9px;
    }

    ul.navbar-nav{
        margin: 0 auto;
    }
</style>