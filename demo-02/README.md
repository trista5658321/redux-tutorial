# Redux 相見歡：介紹 Redux 核心概念以及基礎用法 ( Demo-02 )
## 目標
練習 redux 基礎語法及概念

## 學習項目
- 核心定位：
    架構圍繞著嚴格的單向資料流。全部資料都遵照一樣的生命週期模式，讓應用程式的邏輯更容易預測與了解。

- 三大原則：
    1. 整個應用程式的 state，被儲存在一個樹狀物件放在唯一的 store 裡面
    2. 改變 state 的唯一的方式是發出一個 action，也就是一個描述發生什麼事的物件
    3. 要指定 state tree 如何藉由 action 來轉變，你必須撰寫 pure reducer

- 角色介紹：
    1. action
        - 應用程式傳遞資料到你的 store 的資訊 payload
        - store 唯一的資訊來源
        - plain JavaScript objects，必須擁有 type 屬性
        - 藉由 ```store.dispatch()``` 來把它們傳遞到 store

    2. reducer 
        - 是一個 pure function，指定應用程式的 state 要如何去應對改變
        - 若接收 undefined state 呼叫，reducer 必須回傳應用程式初始 state
        - 接收先前的 state 和一個 action，然後回傳下一個 state
        - 針對任何未知的 action 回傳先前的 state

    3. store
        - 應用程式中將只會有一個 store
        - 掌管應用程式狀態
        - 創建時，必須接收一個 reducer，告知 store 要如何依據不同的 action 進行 state 的更新
        - 允許藉由 ```dispatch(action)``` 來更新 state
        - 允許藉由 ```getState()``` 獲取 state

- 資料生命週期：
    1. 呼叫 ```store.dispatch(action)```
    2. Redux store 呼叫你給它的 reducer function
    3. root reducer 可以把多個 reducer 的 output 合併成一個單一的 state tree
    4. Redux store 儲存 root reducer 回傳的完整 state tree

## 使用方式
下載專案，執行
```
npm install
```