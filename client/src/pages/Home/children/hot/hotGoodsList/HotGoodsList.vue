<template>
    <div class="hot-goods-list">
        <div class="goods-list-container">
            <div class="goods-list-items">
                <div class="goods-img">
                    <img src="./imgs/shop_list/shop.jpg" alt="" width="100%">
                </div>
                <h6 class="goods-title">春夏新款韩版学生阔腿裤女宽松黑色休闲裤高腰显瘦九分直筒裤子女</h6>
                <div class="goods-bottom">
                    <div class="price">
                        <i class="unit">￥</i><span class="price">25.66</span>
                    </div>
                    <span class="description">已拼3555件</span>
                    <div class="users">
                        <img src="./imgs/shop_list/user1.jpg" alt="">
                        <img src="./imgs/shop_list/user2.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="goods-list-items">
                <div class="goods-img">
                    <img src="./imgs/shop_list/shop.jpg" alt="" width="100%">
                </div>
                <h6 class="goods-title">春夏新款韩版学生阔腿裤女宽松黑色休闲裤高腰显瘦九分直筒裤子女</h6>
                <div class="goods-bottom">
                    <div class="price">
                        <i class="unit">￥</i><span class="price">25.66</span>
                    </div>
                    <span class="description">已拼3555件</span>
                    <div class="users">
                        <img src="./imgs/shop_list/user1.jpg" alt="">
                        <img src="./imgs/shop_list/user2.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="goods-list-items">
                <div class="goods-img">
                    <img src="./imgs/shop_list/shop.jpg" alt="" width="100%">
                </div>
                <h6 class="goods-title">春夏新款韩版学生阔腿裤女宽松黑色休闲裤高腰显瘦九分直筒裤子女</h6>
                <div class="goods-bottom">
                    <div class="price">
                        <i class="unit">￥</i><span class="price">25.66</span>
                    </div>
                    <span class="description">已拼3555件</span>
                    <div class="users">
                        <img src="./imgs/shop_list/user1.jpg" alt="">
                        <img src="./imgs/shop_list/user2.jpg" alt="">
                    </div>
                </div>
            </div>
            <div class="goods-list-items">
                <div class="goods-img">
                    <img src="./imgs/shop_list/shop.jpg" alt="" width="100%">
                </div>
                <h6 class="goods-title">春夏新款韩版学生阔腿裤女宽松黑色休闲裤高腰显瘦九分直筒裤子女</h6>
                <div class="goods-bottom">
                    <div class="price">
                        <i class="unit">￥</i><span class="price">25.66</span>
                    </div>
                    <span class="description">已拼3555件</span>
                    <div class="users">
                        <img src="./imgs/shop_list/user1.jpg" alt="">
                        <img src="./imgs/shop_list/user2.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'HotGoodsList'
    }
</script>

<style lang="less" scoped>
    .hot-goods-list{
        width: 100%;
        background-color: #e5e5e5;
        padding-bottom: 60px;
        .goods-list-container{
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            padding: 10px 6px;
            box-sizing: border-box;
            .goods-list-items{
                width: 49%;
                background-color: #ffffff;
                margin-bottom: 10px;
                border-radius: 8px;
                .goods-img{
                    width: 100%;
                    img{
                        border-top-left-radius: 8px;
                        border-top-right-radius: 8px;
                    }
                }
                .goods-title{
                    font-size: 12px;
                    color: #666;
                    padding: 0 6px;
                    height: 18px;
                    line-height: 18px;
                    overflow: hidden;
                }
                .goods-bottom{
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: center;
                    align-items: center;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    padding: 0 6px;
                    .price{
                        display: inline-block;
                        flex: 1;
                        color: #e02e24;
                        font-size: 16px;
                        font-weight: 700;
                        margin-right: 2px;
                        i{
                            font-size: 13px;
                            margin-right: 3px;
                        }
                    }
                    .description{
                        display: inline-block;
                        flex:5;
                        font-size: 12px;
                        color:#cccccc;
                    }
                    .users{
                        display: inline-block;
                        flex:2;
                        margin-left: 3px;
                        display: flex;
                        flex-direction: row;
                        flex-wrap: nowrap;
                        justify-content: center;
                        align-items: center;
                        img{
                            width:22px;
                            border-radius: 50%;
                        }
                        & :first-child{
                            margin-right: -8px;
                        }
                    }
                }
            }
        }
    }
</style>
