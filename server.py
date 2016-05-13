from flask import Flask, request, render_template, jsonify
import datetime

app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/add-comment.json', methods=["POST"])
def add_comment():
    created_at = datetime.datetime.now()
    print "\n\n New Comment: %s" % request.form.get("comment")
    # new_comment = Comment(text=request.form.get("comment"), created_at=datetime.datetime.utcnow())
    # db.session.add(new_comment)
    # db.session.commit()
    resp = {'comment': request.form.get("comment"), "created_at": created_at}
    return jsonify(resp)

if __name__ == "__main__":
    app.debug = True
    app.run(port=5003)