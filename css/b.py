
count=0
start=601
for i in range(130):
    start+=1
    text=f"""@media(width:{start}px){
    """{.s3{
        margin-top: 70px;
    }
    }"""
}
"""
    with open('index.css','a') as f: f.write(text+ '\n')




