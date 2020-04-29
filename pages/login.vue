<template>
  <v-layout>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card flat>
          <v-card-title class="justify-center">
            ログイン
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="メールアドレス"
                name="email"
                prepend-icon="mdi-email-outline"
                type="email"
              />
              <v-text-field
                label="パスワード"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
              />
            </v-form>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn color="primary" depressed>ログイン</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  props: {
    source: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
