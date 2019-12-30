<template>
  <v-form v-model="valid" class="login-container">
    <v-container>
      <v-row>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="Login"
            required
          ></v-text-field>
          <v-text-field
            v-model="lastname"
            type="password"
            :rules="nameRules"
            label="Password"
            required
          ></v-text-field>
      </v-row>
    </v-container>
  </v-form>
  <!-- <div class="login-container">
    <input
      type="text"
      class="input"
      id="email"
      maxlength="80"
      placeholder="Login"
    />
    <input
      type="password"
      class="input"
      id="email"
      maxlength="80"
      placeholder="Password"
    />
    <div class="buttons">
    </div>
  </div> -->
</template>

<script>
export default {

};
</script>

<style>
  .login-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    padding: 20px;
  }

  .input {
    padding: 8px 10px;
    width: 90%;
    margin-bottom: 20px;
    border-style: solid;
    border-color: #000;
    border-width: 0 0 2px 0;
    border-color: #ed1e24;
    border-radius: 5px 5px 0 0;
    font-size: 15px;
  }

  .input:focus {
    background-color: #ffd6d7;
    outline: 0;
  }

  .input::placeholder {
    color: #000;
  }

</style>
