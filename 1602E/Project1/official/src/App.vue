<template>
    <keep-alive exclude="Index">
        <router-view></router-view>
    </keep-alive>
</template>
<style>
	*{
		margin: 0;
		padding: 0;
	}
	html, body{
		height: 100%;
	}
    li{
        list-style: none;
    }
</style>
