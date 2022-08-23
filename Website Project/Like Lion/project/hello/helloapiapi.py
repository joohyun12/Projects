from flask import Flask
from flask import render_template
from flask import request
import os
import openai

openai.api_key = "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"

app = Flask(__name__)
@app.route("/", methods = ['POST', 'GET'])
def hello_world():
    if request.method == 'POST':
        response = openai.Completion.create(
            engine="davinci",
            prompt=request.form['msg'],
            temperature=0.7,
            max_tokens=60,
            top_p=1,
            frequency_penalty=0,
            presence_penalty=0
            )

        user_msg =  + response["choices"][0]["text"]
    else:
        user_msg = "Create an outline for an essay about Walt Disney and his contributions to animation:\n\nI: Introduction\n\nA: Who is Walt Disney and what is his greatest contribution to animation?\n\nB: Why is it significant?\n\nII: Body\n\nA: Walt Disney and his first success: Mickey Mouse\n\nB: Walt Disney and his second success: Snow White\n\nC: _______________\n\nIII: Conclusion\n\nA: Walt Disney’s legacy\n\nB: Walt Disney’s lasting contributions to animation\n\nC: _______________\n\nThis outline uses the same format as the first one, but is less detailed. Even though it is less"
    return render_template('hello1.html', output_msg = user_msg)

if __name__ == '__main__':  
   app.run('0.0.0.0',port=4060,debug=True)