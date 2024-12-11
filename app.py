from flask import Flask, request

app= Flask(__name__)


@app.route('/handle',methods=['POST','GET'])
def handle():
    print('Request Recieved')
    return request.args
    params= ['name','surname','age']
    data=[]
    for param in params:
        if str(request.args.get(param))==str(None):
            return "something went wrong please try again"
        else:
            data.append(str(request.args.get(param)))
    if request.method=='GET':
        return f'Nice to meet you {data[0]} {data[1]}, {data[2]} is a nice age. by the way you used a GET request'

if __name__=='__main__':
    app.run(host='0.0.0.0', port=2666,debug=True)