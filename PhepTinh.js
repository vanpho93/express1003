class PhepTinh {
    constructor(tenPhepTinh, soA, soB) {
        this.tenPhepTinh = tenPhepTinh;
        this.soA = soA;
        this.soB = soB;
    }

    getSign() {
        const { tenPhepTinh } = this;
        if (tenPhepTinh === 'CONG') return '+';
        if (tenPhepTinh === 'TRU') return '-';
        if (tenPhepTinh === 'CHIA') return '/';
        return '*';
    }

    getResultString() {
        const { soA, soB } = this;
        const chuoiPhepTinh = `${soA} ${this.getSign()} ${soB}`;
        return `${chuoiPhepTinh} = ${eval(chuoiPhepTinh)}`;
    }
}

// module.exports = { PhepTinh: PhepTinh };
module.exports = { PhepTinh };
// module.exports = PhepTinh ;
