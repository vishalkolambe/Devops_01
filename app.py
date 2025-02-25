from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', title='CyberShield - Home')

@app.route('/threats')
def threats():
    return render_template('threats.html', title='Cyber Threats')

@app.route('/tools')
def tools():
    return render_template('tools.html', title='Security Tools')

@app.route('/contact')
def contact():
    return render_template('contact.html', title='Contact Us')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
