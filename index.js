const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

app.get('/a', (req, res) => res.send('Ban dang o /a'));
app.get('/b', (req, res) => res.send('Ban dang o /b'));

app.get('/chao/:name/', (req, res) => {
    res.send('Chao ' + req.params.name);
});

app.get('/tinh/:tenPhepTinh/:soA/:soB', (req, res) => {
    const tenPhepTinh = req.params.tenPhepTinh;
    const soA = req.params.soA;
    const soB = req.params.soB;
    const pt = new PhepTinh(tenPhepTinh, +soA, +soB);
    res.send(pt.getResultString());
});

app.listen(3000, () => console.log('Server started.'));

class PhepTinh {
    constructor(tenPhepTinh, soA, soB) {
        this.tenPhepTinh = tenPhepTinh;
        this.soA = soA;
        this.soB = soB;
    }

    getSign() {
        if (this.tenPhepTinh === 'CONG') return '+';
        if (this.tenPhepTinh === 'TRU') return '-';
        if (this.tenPhepTinh === 'CHIA') return '/';
        return '*';
    }

    getResultString() {
        const chuoiPhepTinh = `${this.soA} ${this.getSign()} ${this.soB}`;
        return `${chuoiPhepTinh} = ${eval(chuoiPhepTinh)}`;
    }
}
