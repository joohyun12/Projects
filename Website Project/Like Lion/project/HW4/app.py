from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

from pymongo import MongoClient           
client = MongoClient('localhost', 27017)  
db = client.likelion                      

## HTML을 주는 부분
@app.route('/')
def home():
    return render_template('index.html')

## API 역할을 하는 부분
@app.route('/orders', methods=['POST'])
def write_order():
    name_receive = request.form['name_give']
    amount_receive = request.form['amount_give']
    address_receive = request.form['address_give']
    phone_receive = request.form['phone_give']

    order = {
        'name': name_receive,
        'amount': amount_receive,
        'address': address_receive,
        'phone': phone_receive
    }
    db.orders.insert_one(order)
    return jsonify({'result':'success', 'msg': '주문이 완료 되었습니다!'})


@app.route('/orders', methods=['GET'])
def orders_list():
    orders = list(db.orders.find({},{'_id':0}))
    return jsonify({'result':'success', 'orders': orders})


if __name__ == '__main__':
    app.run('0.0.0.0', port=4443, debug=True)