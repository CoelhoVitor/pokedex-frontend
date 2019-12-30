<template>
  <v-form v-model="valid" class="login-container">
    <v-container>
      <v-row class="inputs">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            class="input"
            color="#2e4db4"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="lastname"
            type="password"
            :rules="nameRules"
            class="input"
            color="#2e4db4"
            label="Password"
            required
          ></v-text-field>
      <div class="buttons">
        <v-btn depressed color="#ed1e24" class="button" type="submit"
            >Entrar</v-btn
          >
        <v-btn depressed color="#ed1e24" class="button" type="submit"
            >Cadastrar</v-btn
          >
      </div>
            </v-row>
    </v-container>
  </v-form>
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
    padding: 0px 40px 20px 40px;
  }

  .inputs {
    display: flex;
    flex-direction: column;
  }

  .input {
    width: 320px;
  }

  .input:focus {
    background-color: #ffd6d7;
    outline: 0;
  }

  .input::placeholder {
    color: #000;
  }

  .buttons {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .button {
    color: #ffffff !important;
    padding: 8px 48px !important;
    border-radius: 20px;
    width: 145px;
  }

</style>
