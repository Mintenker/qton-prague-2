import csv
import string
import unidecode
from datasketch import MinHash

def isValid(post):
    if int(post['num_reactions']) > 50 and int(post['num_angrys']) >= int(post['num_reactions']) / 10:
        return True
    else:
        return False

def decodeWord(word):
    word = removePunctuation(word)
    decoded = unidecode.unidecode(word)
    return decoded.lower()

def removePunctuation(word):
    return word.translate(str.maketrans("", "", string.punctuation))

def getMinHash(post, size):
    mh = MinHash(num_perm=size)
    words = post["status_message"].split(" ")
    post['keyword_pairs'] = dict()
    for word in words:
        if len(word) == 0 or word[0].isupper():
            continue

        dw = decodeWord(word)
        if len(dw) > 5 and len(dw) < 20:
            kw = makeKeyword(dw)
            post['keyword_pairs'][kw] = removePunctuation(word)
            mh.update(kw.encode('utf8'))
    return mh

def makeKeyword(word):
    if word.endswith("ejsi"):
        return word[:-4]
    if word.endswith("iho"):
        return word[:-3]
    if word.endswith("nim"):
        return word[:-3]
    if word.endswith("eho"):
        return word[:-3]
    if word.endswith("ymi"):
        return word[:-3]
    if word.endswith("imi"):
        return word[:-3]
    if word.endswith("ich"):
        return word[:-3]
    if word.endswith("ana"):
        return word[:-3]
    if word.endswith("ani"):
        return word[:-3]
    if word.endswith("ane"):
        return word[:-3]
    if word.endswith("ech"):
        return word[:-3]
    if word.endswith("ych"):
        return word[:-3]
    if word.endswith("em"):
        return word[:-2]
    if word.endswith("ni"):
        return word[:-2]
    if word.endswith("um"):
        return word[:-2]
    if word.endswith("im"):
        return word[:-2]
    if word.endswith("ou"):
        return word[:-2]
    if word.endswith("ym"):
        return word[:-2]
    if word.endswith("e"):
        return word[:-1]
    if word.endswith("a"):
        return word[:-1]
    if word.endswith("i"):
        return word[:-1]
    if word.endswith("u"):
        return word[:-1]
    if word.endswith("y"):
        return word[:-1]
    
    return word