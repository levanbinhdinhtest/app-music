<template>
  <div class="container-header ">
    <div class="btn-header">
        <div class=" btn-signin">
            <div >Đăng Ký</div>
        </div>
        <div class="btn-login">
            <div >Đăng Nhập</div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
    
}
</script>

<style>
   .btn-signin {
    font-weight: 700;
    color: gray;
    font-size: 16px;
    padding: 10px 20px; /* Đảm bảo độ rộng cân bằng */
    transition: transform 0.2s ease, font-size 0.2s ease; /* Thêm transition */
}

.btn-signin:hover {
    font-size: 16px; /* Giữ nguyên font-size */
    transform: scale(1.1); /* Sử dụng transform để phóng to */
    color: white;
    cursor: pointer;
}

.btn-login {
    border: 1px solid #3b3a3a;
    border-radius: 20px;
    background: white;
    font-weight: 700;
    padding: 10px 20px; /* Đảm bảo độ rộng cân bằng */
    font-size: 16px;
    transition: transform 0.2s ease, font-size 0.2s ease; /* Thêm transition */
  
}

.btn-login:hover {
    font-size: 16px; /* Giữ nguyên font-size */
    transform: scale(1.1); /* Sử dụng transform để phóng to */
    cursor: pointer;
}

.container-header{
        display: flex;
        align-items: center; /* Căn giữa theo chiều dọc */
        background: #191818;
        height: 10%;
        border-radius: 10px;
        z-index: 100;
        /* width:1250px; */
    }

.btn-header{
    display: flex;
    position: absolute;
    right: 10px;
}

</style>