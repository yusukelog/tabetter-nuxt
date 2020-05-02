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
                v-model="entryFoods"
                name="foods"
                auto-grow
                clearable
                outlined
              ></v-textarea>
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
            <v-card-text>
              <v-btn color="primary" depressed @click="createRecord">
                登録する
              </v-btn>
            </v-card-text>
            <v-card-title>
              たべたもの履歴
            </v-card-title>
            <v-card-text>
              <ul>
                <li v-for="item in recordFoods" :key="item.foods">
                  {{ item.foods }}
                </li>
              </ul>
            </v-card-text>
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
            <v-card-text>
              <v-btn color="primary" depressed>検索する</v-btn>
            </v-card-text>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import firebase from '~/plugins/firebase.js'

export default {
  data() {
    return {
      // たべたもの
      entryFoods: '',
      // たべたもの履歴
      recordFoods: [],
      items: ['朝ごはん', '昼ごはん', '夜ごはん', 'おやつ']
    }
  },
  created() {
    this.getRecods()
  },
  methods: {
    async getRecods() {
      this.recordFoods = []
      const response = await firebase
        .firestore()
        .collection('records')
        .orderBy('upDate', 'desc')
        .get()
      response.forEach((doc) => {
        this.recordFoods.push(doc.data())
      })
    },
    async createRecord() {
      try {
        await firebase
          .firestore()
          .collection('records')
          .add({
            foods: this.entryFoods,
            upDate: firebase.firestore.Timestamp.fromDate(
              new Date('December 10, 1815')
            )
          })
        this.getRecods()
        this.entryFoods = ''
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
