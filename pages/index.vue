<template>
  <v-layout>
    <v-row>
      <v-col cols="12" sm="8">
        <v-card flat>
          <v-form>
            <v-card-title>
              たべたもの
            </v-card-title>
            <v-card-text>
              <v-textarea
                v-model="foods"
                name="foods"
                auto-grow
                clearable
                outlined
              ></v-textarea>
              {{ foods }}
            </v-card-text>
            <v-card-title>
              カテゴリー
            </v-card-title>
            <v-card-text>
              <v-radio-group row>
                <v-radio label="朝ごはん" value="category-1"></v-radio>
                <v-radio label="昼ごはん" value="category-2"></v-radio>
              </v-radio-group>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" depressed>登録する</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card outlined>
          <v-form>
            <v-card-title>
              検索
            </v-card-title>
            <v-card-text>
              <v-text-field
                label="キーワード入力"
                name="keywords"
                type="text"
              />
              <v-select
                :items="items"
                label="カテゴリー"
                chips
                multiple
              ></v-select>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" depressed>検索する</v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      foods: '',
      items: ['朝ごはん', '昼ごはん', '夜ごはん', 'おやつ']
    }
  }
}
</script>
