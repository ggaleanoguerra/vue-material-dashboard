<template>
    <div class="content">
      <div class="md-layout">
        <div
          class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        >
          <md-card>
            <md-card-header data-background-color="green">
              <h4 class="title">Aquí se plantearán actividades</h4>
              <p class="category">Título de la actividad</p>
            </md-card-header>
            <md-card-content>
              <simple-table table-header-color="green"></simple-table>
            </md-card-content>
          </md-card>
        </div>
  
        <div
          class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        >
          <md-card class="md-card-plain">
            <md-card-header data-background-color="green">
              <h4 class="title">Actividad 2</h4>
              <p class="category">Desarrolla la actividad</p>
            </md-card-header>
            <md-card-content>
              <ordered-table></ordered-table>
            </md-card-content>
          </md-card>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { SimpleTable, OrderedTable } from "@/components";
  
  export default {
    components: {
      OrderedTable,
      SimpleTable,
    },
  };
  </script>
  