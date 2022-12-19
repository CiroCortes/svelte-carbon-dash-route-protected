<script>
    import { DataTable } from "carbon-components-svelte";
    import { fade } from "svelte/transition";
    import { user } from '../stores/store';
    import { navigate } from 'svelte-routing';
	  import { onMount } from 'svelte';

	onMount(()=>{
		if(!$user){
			console.log("user no existe en agents")
		
		navigate("/login",{replace:true})

	}

	});
  
  </script>

  <div class="container-list" in:fade>
    <DataTable
    title="Agent list status"
    description="realtime performance"
    headers={[
      { key: "userid", value: "User ID" },
      { key: "fullname", value: "Full Name" },
      { key: "phonelogin", value: "Phone Login" },
      { key: "level", value: "Level" },
      { key: "group", value: "Group" },
      { key: "active", value: "Active" },
      { key: "timeconection", value: "Time" },
    ]}
    rows={[
      {
        id: "1",
        userid:"15136465",
        fullname: "Sergio Aguero",
        phonelogin: "3608",
        level: 1,
        group: "ejecutive",
        active:"y",
        timeconection:"05:44"

      },
      {
        id: "2",
        userid:"1513854",
        fullname: "Eveling Muños",
        phonelogin: "3850",
        level: 2,
        group: "ejecutive",
        active:"y",
        timeconection:"04:25"

      },
      {
        id: "3",
        userid:"15183165",
        fullname: "Martin Peña",
        phonelogin: "4250",
        level: 1,
        group: "ejecutive",
        active:"y",
        timeconection:"03:44"

      },
      {
        id: "4",
        userid:"14398745",
        fullname: "Marta Sanchez",
        phonelogin: "9877",
        level: 1,
        group: "admin",
        active:"y",
        timeconection:"01:45"

      },
      {
        id: "5",
        userid:"145654215",
        fullname: "Ivan Guerrero",
        phonelogin: "3598",
        level: 1,
        group: "ejecutive",
        active:"y",
        timeconection:"07:30"

      },
      
    ]}
  />
  </div>

  <style>
    .container-list{
      display: grid;
      margin-left: 5vh;
      margin-right: 5vh;
          
    }
  </style>
  
  