<script>
    import "carbon-components-svelte/css/g80.css";
    import { DataTable } from "carbon-components-svelte";
    import { fade } from "svelte/transition";
    import { user } from '../stores/store';
    import { navigate } from 'svelte-routing';
	  import { onMount } from 'svelte';

	onMount(()=>{
		if(!$user){
			console.log("user no existe")
		
		navigate("/login",{replace:true})

	}

	});
  </script>

  <div class="container-list" in:fade>
    <DataTable 
    headers={[
      { key: "nameList", value: "Name List" },
      { key: "campaign", value: "Campaign" },
      { key: "field", value: "Fields" },
      { key: "active", value: "Active" },
    ]}
    rows={[
      {
        id: "a",
        nameList: "Plan_defensa_13102022 01",
        campaign: "PLANDEF01",
        field: 75550,
        active: "Y",
      },
      {
        id: "b",
        nameList: "Plan_defensa_13102022 01",
        campaign: "PLANDEF01",
        field: 75550,
        active: "Y",
      },
      {
        id: "1",
        nameList: "Plan_defensa_13102022 01",
        campaign: "PLANDEF01",
        field: 75550,
        active: "Y",
      },{
        id: "2",
        nameList: "Plan_defensa_13102022 01",
        campaign: "PLANDEF01",
        field: 75550,
        active: "Y",
      },{
        id: "3",
        nameList: "Plan_defensa_13102022 01",
        campaign: "PLANDEF01",
        field: 75550,
        active: "Y",
      },{
        id: "4",
        nameList: "Plan_defensa_13102022 01",
        campaign: "PLANDEF01",
        field: 75550,
        active: "Y",
      },{
        id: "5",
        nameList: "Plan_defensa_13102022 01",
        campaign: "PLANDEF01",
        field: 75550,
        active: "Y",
      },{
        id: "6",
        nameList: "Plan_defensa_13102022 01",
        campaign: "PLANDEF01",
        field: 75550,
        active: "Y",
      },{
        id: "7",
        nameList: "Plan_defensa_13102022 01",
        campaign: "PLANDEF01",
        field: 75550,
        active: "Y",
      },{
        id: "8",
        nameList: "Plan_defensa_13102022 01",
        campaign: "PLANDEF01",
        field: 75550,
        active: "Y",
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
  
  
  
    