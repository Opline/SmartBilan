<template>
  <v-app-bar
    color="teal-darken-4"
    image="https://picsum.photos/1920/1080?random"
  >
    <template v-slot:image>
      <v-img
        gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
      ></v-img>
    </template>

    <template v-slot:prepend>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Smart Bilan hello world</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-list
      :items="buildList(bilanInfo)"
      @click:select="v =>  triggerMenu(v)"
    >
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Header",
  props: {
    bilanInfo: {
      default: () => ({}),
      type: Object,
    }
  },
  methods: {
    buildList(items) {
      const infos =  JSON.parse(JSON.stringify(items))
      const arr = []
      for (const i in infos) {
        arr.push(i)
      }
      return arr.map((k) => ({title : infos[k].text, value : infos[k].id}))
    },
    triggerMenu(v) {
      const newid = v.id;
      this.$emit('triggerMenu', newid)
      this.drawer = false;
    }
  },
  data() {
    return {
      drawer: false,
      group: null,
      items: [
        {
          title: 'Foo',
          value: 'foo',
        },
        {
          title: 'Bar',
          value: 'bar',
        },
        {
          title: 'Fizz',
          value: 'fizz',
        },
        {
          title: 'Buzz',
          value: 'buzz',
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
