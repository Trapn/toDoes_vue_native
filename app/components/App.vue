<template>
    <Page>
        <ActionBar title="To Does"></ActionBar>

        <StackLayout>
                 <Button v-bind:text="msg" @tap="handleBtnPress"/>
                 <Button class="btn btn-primary" @tap="$router.push('/about')">About</Button>
        </StackLayout>
    </Page>
</template>

<script>
export default {
  data: function() {
    return {
      msg: "Klik mij niet!"
    };
  },
  methods: {
    handleBtnPress: function() {   
      alert('Ela niet klikken heb ik gezegd, snotneuze!');
    }
  }
};
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .title {
        text-align: left;
        padding-left: 16;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }

    .drawer-header {
        padding: 50 16 16 16;
        margin-bottom: 16;
        background-color: #53ba82;
        color: #ffffff;
        font-size: 24;
    }

    .drawer-item {
        padding: 8 16;
        color: #333333;
        font-size: 16;
    }
</style>
