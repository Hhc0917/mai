<template>
    <div id="layout" :class="{'pd40': !$route.meta.hideHeader}">
        <mt-header class="header" fixed style="z-index:999999999" v-if="!$route.meta.hideHeader">
            <div slot="left" v-show="$route.meta.showBack">
                <mt-button icon="back" @click="goBack">{{$route.meta.name}}</mt-button>
            </div>
            <mt-button slot="right" v-if="$route.meta.tabRight" @click="clickRightBar">
                <span class="color2"> {{$route.meta.tabRight}}</span>
            </mt-button>
        </mt-header>
        <router-view></router-view>
        <div class="footer-wrapper" v-if="$route.meta.showBottomTab">
	        <div id="bottomBar" class="flex flex-h">
	            <router-link :to="{name:'home'}" tag="div" class="bottomBar-item col">
                    <p class="icon">
                        <i class="iconfont icon-shouye"></i>
                    </p>
	            	<p class="txt">首页</p>
	            </router-link>
	            <router-link :to="{name:'shopping'}" tag="div" class="bottomBar-item col">
                    <p class="icon">
                        <i class="iconfont icon-dianpu"></i>
                    </p>
	                <p class="txt">商城</p>
	            </router-link>
	            <router-link :to="{name:'my'}" tag="div" class="bottomBar-item col">
                    <p class="icon">
                        <i class="iconfont icon-wode"></i>
                    </p>
	                <p class="txt">我的</p>
	            </router-link>
	        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'layout',
        data() {
            return {

            }
        },
        computed: {
            rightBarFun(){
                return this.$store.getters.rightBarFun
            }
        },
        methods: {
            goBack(){
                this.$router.go(-1)
            },
            clickRightBar(){
                this.rightBarFun()
            }
        },
        created() {
            let search = this.$route.query;
            if(search.shareCode){
                this.Storage.setItem("urlMessage", search);
            }
        },
        mounted() {}
    }
</script>

<style lang="scss" scoped>
    @import "./layout";
</style>