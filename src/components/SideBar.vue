<template>
    <div class="sidebar">
        <div class="sidebar-top">
            <div class="logo">
                <img src="../assets/spotify-app-logo-spotify-icon-transparent-free-png.webp" alt="">
                <p>Spotify</p>
            </div>
            <div class="home">
                <i class="fa-solid fa-house"></i>
                <router-link to="/"><p>Trang Chủ</p></router-link>
                
            </div>
            <div class="search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <router-link to="/search"><p>Tìm Kiếm</p></router-link>
                
            </div>
        </div>
        <div class="sidebar-under">
            <div class="libraries container">
                <div class="row">
                    <div class="col-1">
                        <i class="fa-solid fa-star"></i>
                    </div> 
                    <div class="col-5" style="text-align: left;">
                       
                        <p>Thư Viện</p>
                    </div>
                    <div class="col-4" style="text-align: right;">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
            </div>
            <div class="list-option">
                <div class="playlist bg-black">
                            <p class="title">Tạo danh sách phát đầu tiên của bạn</p>
                            <p class="body">Rất dễ!Chúng tôi sẽ giúp bạn</p>
                            <button>Tạo danh sách phát</button>
                </div>
                <div class="podcast bg-black">
                            <p class="title">Tạo danh sách phát đầu tiên của bạn</p>
                            <p class="body">Rất dễ!Chúng tôi sẽ giúp bạn</p>
                            <button>Tạo danh sách phát</button>
                </div>
            </div>

            <div class="list-tags">
                <p>Pháp lý</p>
                <p>Trung tâm an toàn và quyền riêng tư</p>
                <p>Chính sách quyền riêng tư</p>
                <p>Cookie</p>
                <p>Giới thiệu quảng cáo</p>
                <p>Hỗ trợ tiếp cận</p>
            </div>

            <Button class="language">
                <i class="fa-solid fa-globe"></i>
                <p>Tiếng Việt</p>
            </Button>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>
    .logo{
        width: 50px;
        height: 50px;
        display: flex;
        cursor: pointer;
    }
    .home{
        display: flex;
        margin-left:12px ;
        margin-top: 10px;
        cursor: pointer;
    }
    .search{
        display: flex;
        margin-left:12px ;
        margin-top: 30px;
        cursor: pointer;
    }
    img{
        width: 100%;
        object-fit: contain;
    }
    .sidebar-top p{
        display:flex ;
        margin: 0;
        justify-content: center;
        align-items: center;
        font-weight: 800px;
        color: aliceblue;
    }
    a:hover{
        text-decoration: none;
    }
    i{
        font-size: 25px;
        color: aliceblue;
    }
    .home p{
        margin-left: 10px;
        margin-top:5px ;
        font-weight: bold;
    }
    .search p{
        margin-left: 12.5px;
        font-weight: bold;
    }
    .sidebar{
      height: 100%;
      box-sizing: border-box;
    }
    .sidebar-top{
        margin-bottom: 10px;
        background: #222121;
        padding-bottom: 20px;
        border-radius: 10px;
        min-height: 20%;
    }
    .sidebar-under{
        background: #222121;
        border-radius: 10px;
        padding-top: 10px;
        min-height: 78.2%;
        
    }
    .libraries p{
        color: aliceblue;
        font-weight: bold;
        padding-top:2px;
    }
    .bg-black{
        background: rgb(67, 66, 66);
    }
    .list-option{
        margin: 20px 15px;
        height: 150px;
        overflow-y: scroll;
    }
    .list-option::-webkit-scrollbar-thumb {
  background: #888; /* Màu sắc của thumb */
  border-radius: 10px; /* Bo tròn góc của thumb */
}
.list-option::-webkit-scrollbar-track {
  background: #f1f1f1; /* Màu sắc của track */
  border-radius: 10px; /* Bo tròn góc của track */
}
/* Tùy chỉnh khi hover vào thumb */
.list-option::-webkit-scrollbar-thumb:hover {
  background: red; /* Màu sắc của thumb khi hover */
}
    .playlist{
        margin-bottom: 20px;
        padding-top:10px;
        padding-bottom: 10px;
        border-radius:15px ;
    }
    .podcast{
        padding-top:10px;
        padding-bottom: 10px;
        border-radius:15px ;
    }
    .title{
        color: aliceblue;
        text-align: left;
        font-weight: bold;
        margin-left: 15px;
        font-size: 17px;
    }
    .body{
        color: aliceblue;
        text-align: left;
        font-weight: 500;
        margin-left: 15px;
    }
    .list-option button{
        padding: 5px 15px;
        border-radius: 20px;
        font-weight: bold;
    }
    .list-tags{
        display: flex;
        flex-wrap: wrap;
        margin: 50px 15px;
    }
    .list-tags p{
        color: aliceblue;
        font-size: 13px;
        margin-right: 10px ;
        cursor: pointer;
    }
    button.language{
        display: flex;
        margin: 10px 15px;
        border:1px solid #f1f1f1 ;
        background:#3b3a3a ;
        border-radius: 22px;
        padding: 0 20px;
        padding-top: 12px;
    }
    .language p{
        color: aliceblue;
        font-weight: bold;
        font-size: 15px;
        margin-left: 5px;
    }
    .active{
        color: aliceblue;
        text-decoration: none;
    }

</style>