<script>
	import {
		DataTable,
		Table,
		TableBody,
		TableCell,
		TableContainer,
		TableHead,
		TableHeader,
		TableRow
	} from 'carbon-components-svelte';

    import "carbon-components-svelte/css/g80.css";
    import { fade } from "svelte/transition";
    import data from './data.json';
    export let tabledata = data;
    //console.log(tabledata);

 

    
</script>

<div in:fade>
    <TableContainer>
        <Table>
          <TableHead>
            <!-- Crea una fila con dos celdas para el encabezado -->
            <TableRow>
              <TableHeader>Phone</TableHeader>
              <TableHeader>Server</TableHeader>
              <TableHeader>Staus</TableHeader>
              
            </TableRow>
          </TableHead>
          <TableBody>
            <!-- Itera sobre la lista de usuarios y crea una fila por cada uno -->
            {#each tabledata as user}
              <TableRow>
                <!-- Crea dos celdas con el nombre y el apellido del usuario -->
                <TableCell>{user.telefono}</TableCell>
                <TableCell>{user.servidor}</TableCell>
                <TableCell>{user.status}</TableCell>
                
              </TableRow>
            {/each}
          </TableBody>
        </Table>
      </TableContainer>
    
</div>
    
