<template>

    <div id="AppMain">

        <router-view />

    </div>

</template>



<script>
export default {
    name: "AppMain",
};
</script>


<style lang="scss" scoped>
#AppMain {
    margin-top: 55px;
    height: calc(100% - 55px);
    padding: 10px;
    box-sizing: border-box;
}
</style>