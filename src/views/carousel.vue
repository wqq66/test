<template>
    <Carousel autoplay>
        <Carousel-item>
            <div class="demo-carousel">
                <img src="../assets/6.jpg">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
            <img src="../assets/7.jpg">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
            <img src="../assets/8.jpg">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
            <img src="../assets/9.jpg">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
            <img src="../assets/10.jpg">
            </div>
        </Carousel-item>
    </Carousel>
    </template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.ivu-carousel{
    height: 400px;
    width: 600px;
    position: relative;
    /* background-color: blue; */
    margin: 50px auto;
    border:1px solid #333333;
    overflow: hidden;
}
img{
    height: 400px;
    width: 600px;
}

</style>