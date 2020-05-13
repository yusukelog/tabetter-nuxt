<template>
  <v-row>
    <v-col cols="12" sm="8">
      <v-card flat>
        <v-form>
          <v-card-title>
            たべたもの
          </v-card-title>
          <v-card-text>
            <v-text-field
              v-model="entryFoods"
              name="foods"
              type="text"
              outlined
            />
          </v-card-text>
          <v-card-title>
            カテゴリー
          </v-card-title>
          <v-card-text>
            <v-radio-group row class="ma-0">
              <v-radio label="朝ごはん" value="category-1"></v-radio>
              <v-radio label="昼ごはん" value="category-2"></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-card-text>
            <v-btn color="primary" depressed @click="createRecord">
              登録する
            </v-btn>
          </v-card-text>
        </v-form>
      </v-card>
      <v-card flat>
        <v-card-title>
          たべたもの履歴
        </v-card-title>
        <v-card-text v-if="!progressCircular">
          <div class="pannel">
            <v-card-subtitle class="border pa-2 grey darken-2">
              <v-icon class="mr-1" dark dense>mdi-calendar-month</v-icon>
              <span class="font-weight-bold white--text">2020年01月08日</span>
            </v-card-subtitle>
            <div class="px-5 py-4">
              <div class="d-flex align-center">
                <div class="mr-4 d-flex">
                  <v-icon class="mr-1" small>mdi-clock-outline</v-icon>
                  <span>12:00</span>
                </div>
                <div class="d-flex">
                  <v-icon class="mr-1" small>mdi-tag</v-icon>
                  <span>昼ごはん</span>
                </div>
                <v-spacer></v-spacer>
                <div>
                  <v-btn color="primary" small depressed>
                    編集する
                  </v-btn>
                </div>
              </div>
              <!-- <div class="mt-5">
                <div v-for="food in recordFoods" :key="food">
                  {{ food }}
                </div>
              </div> -->
            </div>
          </div>
        </v-card-text>
        <v-card-text v-if="progressCircular" algin="center">
          <v-progress-circular
            indeterminate
            color="primary"
          ></v-progress-circular>
        </v-card-text>
      </v-card>
      <v-card flat align="center" class="mt-5">
        <v-btn dark color="grey darken-2" depressed> 全ての履歴を見る </v-btn>
      </v-card>
    </v-col>
    <v-col cols="12" sm="4">
      <v-card outlined>
        <v-form>
          <v-card-title>
            検索
          </v-card-title>
          <v-card-text>
            <v-text-field label="キーワード入力" name="keywords" type="text" />
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
</template>

<script>
import firebase from '~/plugins/firebase.js'

export default {
  data() {
    return {
      // たべたもの
      entryFoods: '',
      // たべたもの履歴
      recordFoods: '',
      items: ['朝ごはん', '昼ごはん', '夜ごはん', 'おやつ'],
      // プログレスバー
      progressCircular: false
    }
  },
  created() {
    this.getRecods()
  },
  methods: {
    async getRecods() {
      const posts = await firebase
        .firestore()
        .collectionGroup('posts')
        .get()
      posts.forEach((doc) => {
        console.log(doc.data())
      })

      this.progressCircular = false
    },
    async createRecord() {
      try {
        await firebase
          .firestore()
          .collection('records')
          .add({
            food: this.entryFoods,
            upDate: firebase.firestore.Timestamp.fromDate(new Date())
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

<style scoped>
.pannel {
  border: 1px solid #616161;
}
</style>
