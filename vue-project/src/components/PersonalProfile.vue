<template>
<div class="container">
    <header>
      <h1>ABOUT ME</h1>
    </header>
    <main>
      <section class="main-content">
        <h2>Ryan Elijah Luar</h2>
        <p>I am a student in Asia Pacific College taking Bachelor of Science in Information Technology specialized in Mobile and Internet Applications.</p>
        <p>My experience in my course has had its ups and downs. I learned how to code, understand their functions, and their purposes. I also crammed a lot of subjects during my freshman year due to being overwhelmed. But overall, taking the IT course is a great choice.</p>
        <h2>Goals in Life</h2>
        <ol>
          <li>To get rich</li>
          <li>To have my dream house and bike</li>
          <li>To graduate college</li>
        </ol>
      </section>
      <aside class="sidebar">
        <h2>Hobbies & Interests</h2>
        <table>
          <tr>
            <th>Hobbies</th>
            <th>Interests</th>
          </tr>
          <tr>
            <td>Playing Basketball</td>
            <td>Dancing</td>
          </tr>
          <tr>
            <td>Riding Motorcycle</td>
            <td>Exploring</td>
          </tr>
          <tr>
            <td>Going to the Gym</td>
            <td>-</td>
          </tr>
        </table>
        <h2>Picture of Myself</h2>
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462548481_540095805511549_6966193485901593555_n.png?stp=dst-png_p480x480&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=T8cbFsLmXa4Q7kNvgHIYCea&_nc_ad=z-m&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QEJ05XDsUeQkWfmV5vtBQIQdbOUUOHGFNk8WVc-ICriPQ&oe=6767BB0">
        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/462641134_2557384214472181_3934798040524585380_n.png?stp=dst-png_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=IeAu8iuMM1cQ7kNvgFnHMGq&_nc_ad=z-m&_nc_zt=23&_nc_ht=scontent.xx&oh=03_Q7cD1QG63vbPZ7sn2j6nWsDRBz45uH7LqH0-x_TkKGtdx3GNeg&oe=676FAC40">
        <img src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.15752-9/462540612_8695278730538473_4355435446233547931_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=pnQ9ah5wj_UQ7kNvgHw4wyK&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna.oh=03_Q7cD1QFonvv7lMoW5xSQnWbTOYRctgTb4rNjhpzY-EiPjFJ9fQ&oe=676F94D3" >
      </aside>
    </main>
  </div>
  
  </template>
  
  <script></script>

  
  <style>
  .container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100vh;
  }
  
  header, footer {
    background-color: #f0f0f0;
    padding: 20px;
  }
  
  main {
    display: flex;
    flex-direction: row;
  }
  
  .main-content {
    flex: 2;
    background-color: #fff;
    padding: 20px;
  }
  
  .sidebar {
    flex: 1;
    background-color: #f5f5f5;
    padding: 20px;
  }
  table, td, th {
    border: 1px solid black;
  }
  
  table {
    border-collapse: collapse;
    width: 50%;
  }
</style>