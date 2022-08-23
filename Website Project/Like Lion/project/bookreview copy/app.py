from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

# from asset import all my icons

from pymongo import MongoClient           # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.likelion                      # 'likelion'라는 이름의 db를 만듭니다.

## HTML을 주는 부분
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/courses', methods=['POST'])
def register_course():
    name_receive = request.form['name_give']
    professor_receive = request.form['prof_give']
    description_receive = request.form['desc_give']
    #THIS SHOULD BE either yesupdates or noupdates
    notification_receive = request.form['notif_give']


    # DB에 삽입할 course 만들기
    course = {
       'coursename': name_receive,
       'professor': professor_receive,
       'description': description_receive,
       'notification': notification_receive,
    }
    # courses에 course 저장하기
    db.courses.insert_one(course)
    # 성공 여부 & 성공 메시지 반환
    return jsonify({'result': 'success', 'msg': 'You have successfully added this course!'})

@app.route('/dashboard', methods = ['GET', 'POST'])
def index():
    return render_template("forum.html")



@app.route('/courses', methods=['GET'])
def get_course ():
    courses = list(db.courses.find({},{'_id':0}))
    return jsonify({'result':'success', 'courses': courses})

if __name__ == '__main__':
    app.run('0.0.0.0', port=4567, debug=True)