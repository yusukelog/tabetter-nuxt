<template>
  <v-app light>
    <v-app-bar color="primary" dark fixed flat app>
      <v-toolbar-title class="headline font-weight-bold" v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>ログアウト</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="absolute" color="primary" dark app>
      <v-col class="text-center" cols="12">
        &copy; {{ new Date().getFullYear() }} — <strong>Tabetter</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      absolute: true,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Tabetter'
    }
  }
}
</script>

<style scoped>
@media (min-width: 1904px) {
  .container {
    max-width: 960px;
  }
}
</style>
