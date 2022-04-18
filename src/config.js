import dotenv from "dotenv"
dotenv.config()
export default {
    json:{
        path:'/DB'
    },
    mongoose:{
        database:`mongodb+srv://eduardo:${process.env.mongo_password}@ecommerceatlas.ddpzv.mongodb.net/Ecommerce-coder?retryWrites=true&w=majority`
    },
    firebase:{
            "type": "service_account",
            "project_id": "ecommerce-coderhouse-84dc7",
            "private_key_id": "751901f15a1109f069d06c8e78e1c140f5a6bb5b",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC8hBewphbxc2Ru\n0ga2vPzrX6qo8W1B/E2IxrnLxp0vdAjQEhf5jp6uoxh30QePDysnVdc1zPBu7D+n\ng2t5fZwb65aClq9cigBTuQlg0U+PTyI+aYU4m8poEHk4xaOvaha0LUhD/UsI7SRJ\n9lIksXjHQpdYhw99jAKZdt6vxKH5m6iW4bDiBg66SS4k49qkouyCiG4RtGcuXFVu\n57ig7v+/S+0k3urHkdPtxKBgsVxwj12wd0ITSqYi/+GK6lzYxfzgnS9LsxHFE5CC\nfFfA1wM1/UVcFH5YpvVzpt6K/J4pk8KGf4c7CM+6+dVUSc2Svh5hsQM9zGxlEbX/\nQXwPXjLZAgMBAAECggEAAIWBbUWTjawK8vvvKDh1a9wSMRdBFp9Xwl4BkizX++Af\nZoTBftK94W//d6FjGt21xsBhiogPgdCmGNTWI/ozFHUX4v+Yt5hRvOmOB/yipc8k\n7wHd7C5EjPol47Od3gF2OgRgDU2yx4qkZyhglmWZSgltbFssGBkeW4W59i5RX/5L\nIH0cvmbBWYEhy7EvkL0KidxmD2PVgjfqaFIuCJulqsR6/fXx6mF5WjnfERCHqHrZ\nMoNRTl520Sjshf8kNq6njPeiIWNdElDAsdExikbGXbGJ9d7bYpp/0VymurrDCT2m\niRXsRb+KkCwmfOWgtUnMyOZvqm8W4WfjZIxPWEnOwQKBgQDpMj8ijqfpZWzNzstJ\nxoUZaawUboA61UVCEqwCeKZUnzqkSWypeEsmdZgIpbZtad2I3FrUOW49bPb7JgVd\nxpXB8mZ4sJejYU7Z4vYVemjxixM5DWH1BrAW14sDNCMrsGXoKT7CwEqt+F0VqZSs\nJtu+XO49rP1/WEJ7y1in/mzs6QKBgQDO81XWUdDfEdDMLk2TqE8jA8ThfYLTLNwE\nMylHMIAyPD2t5mhnigfv1Z3Y6kmxTo60Q+wcZWk1I2ioqNzKyu0c0tfUFj6Bn3Z5\nGfa3X9NATyAxkk8NHio8tJSY3CglO1nxC/qmKWQHVgIwI2ncxj4Nso0puGiIqXJ1\nmQGwoHigcQKBgQDfNVMtNrMOOiDdFhWLdlOsMXOe0u42YjE6vziZ3PYIhajR294A\nkL4N//0YOdXWAMEl4RWnkZktfoEhgBEe45gw3l6rIwziO6AH+rBlepe8q8wojeC3\nckFWe9X5qQwJI31HrUL/kqNoxhQDSiCeb0tieP0pV84E+Gwaplcj5epJEQKBgATM\nwADohN+nmiAiMspp7Ovy+m4Aazhaof+28A4modKIcyXFYkaEfQqi+bY+ONdT6xtj\nN+aws2/4EkVXJUfOzREOEtNocKqw+B5267H1FwE21JhRvGOhf3lI9ulUsdmrNrrQ\nfE++RgOliwdyytHEB0xqB7wf+sywoWb41YEzN5kBAoGABhpfUQ11+j3WSDnN/ZrF\nmozpAxZ0F4VGsXksj3zgAxAfT46m5Kuhu4+YWZcdKeEAlY1t+i9PAdJ2tuSH/xEo\nzc6jUJE5FV4oAy7MuPfyfU7W+KQcNWDr5P4/ojq7XxXTAkr+SW9zoVUQVUlYZWR/\nn0svsA20odO8e2WGHoKzH0Y=\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-l6135@ecommerce-coderhouse-84dc7.iam.gserviceaccount.com",
            "client_id": "104608091141989746169",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-l6135%40ecommerce-coderhouse-84dc7.iam.gserviceaccount.com"
          }
}