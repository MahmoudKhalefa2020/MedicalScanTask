
function solveLDL(total, hdl, TG, Method = 'Martin-Hopkins', unit = 'mmol/L') {
    var ldl = 0;
    var nonHDL = total - hdl;
    var factor = 2.2;
    if (Method === 'Martin-Hopkins') {
        if (TG <= 0.55) {
            if (nonHDL <= 2.6) { factor = 1.6 } else if (nonHDL <= 3.4) { factor = 1.5 } else if (nonHDL <= 4.1) { factor = 1.4 } else if (nonHDL <= 4.9) { factor = 1.4 } else if (nonHDL <= 5.6) { factor = 1.4 } else { factor = 1.3 }
        } else if (TG <= 0.63) {
            if (nonHDL <= 2.6) { factor = 1.8 } else if (nonHDL <= 3.4) { factor = 1.7 } else if (nonHDL <= 4.1) { factor = 1.6 } else if (nonHDL <= 4.9) { factor = 1.6 } else if (nonHDL <= 5.6) { factor = 1.6 } else { factor = 1.5 }
        } else if (TG <= 0.69) {
            if (nonHDL <= 2.6) { factor = 1.9 } else if (nonHDL <= 3.4) { factor = 1.8 } else if (nonHDL <= 4.1) { factor = 1.8 } else if (nonHDL <= 4.9) { factor = 1.7 } else if (nonHDL <= 5.6) { factor = 1.6 } else { factor = 1.6 }
        } else if (TG <= 0.75) {
            if (nonHDL <= 2.6) { factor = 2 } else if (nonHDL <= 3.4) { factor = 1.9 } else if (nonHDL <= 4.1) { factor = 1.8 } else if (nonHDL <= 4.9) { factor = 1.8 } else if (nonHDL <= 5.6) { factor = 1.7 } else { factor = 1.7 }
        } else if (TG <= 0.8) {
            if (nonHDL <= 2.6) { factor = 2.1 } else if (nonHDL <= 3.4) { factor = 1.9 } else if (nonHDL <= 4.1) { factor = 1.9 } else if (nonHDL <= 4.9) { factor = 1.8 } else if (nonHDL <= 5.6) { factor = 1.8 } else { factor = 1.7 }
        } else if (TG <= 0.85) {
            if (nonHDL <= 2.6) { factor = 2.1 } else if (nonHDL <= 3.4) { factor = 2 } else if (nonHDL <= 4.1) { factor = 1.9 } else if (nonHDL <= 4.9) { factor = 1.8 } else if (nonHDL <= 5.6) { factor = 1.8 } else { factor = 1.8 }
        } else if (TG <= 0.89) {
            if (nonHDL <= 2.6) { factor = 2.1 } else if (nonHDL <= 3.4) { factor = 2 } else if (nonHDL <= 4.1) { factor = 2 } else if (nonHDL <= 4.9) { factor = 1.9 } else if (nonHDL <= 5.6) { factor = 1.9 } else { factor = 1.8 }
        } else if (TG <= 0.94) {
            if (nonHDL <= 2.6) { factor = 2.2 } else if (nonHDL <= 3.4) { factor = 2.1 } else if (nonHDL <= 4.1) { factor = 2 } else if (nonHDL <= 4.9) { factor = 1.9 } else if (nonHDL <= 5.6) { factor = 1.9 } else { factor = 1.8 }
        } else if (TG <= 0.98) {
            if (nonHDL <= 2.6) { factor = 2.2 } else if (nonHDL <= 3.4) { factor = 2.1 } else if (nonHDL <= 4.1) { factor = 2 } else if (nonHDL <= 4.9) { factor = 2 } else if (nonHDL <= 5.6) { factor = 1.9 } else { factor = 1.9 }
        } else if (TG <= 1.04) {
            if (nonHDL <= 2.6) { factor = 2.3 } else if (nonHDL <= 3.4) { factor = 2.1 } else if (nonHDL <= 4.1) { factor = 2.1 } else if (nonHDL <= 4.9) { factor = 2 } else if (nonHDL <= 5.6) { factor = 1.9 } else { factor = 1.9 }
        } else if (TG <= 1.08) {
            if (nonHDL <= 2.6) { factor = 2.3 } else if (nonHDL <= 3.4) { factor = 2.2 } else if (nonHDL <= 4.1) { factor = 2.1 } else if (nonHDL <= 4.9) { factor = 2 } else if (nonHDL <= 5.6) { factor = 2 } else { factor = 1.9 }
        } else if (TG <= 1.13) {
            if (nonHDL <= 2.6) { factor = 2.3 } else if (nonHDL <= 3.4) { factor = 2.2 } else if (nonHDL <= 4.1) { factor = 2.1 } else if (nonHDL <= 4.9) { factor = 2 } else if (nonHDL <= 5.6) { factor = 2 } else { factor = 1.9 }
        } else if (TG <= 1.19) {
            if (nonHDL <= 2.6) { factor = 2.4 } else if (nonHDL <= 3.4) { factor = 2.3 } else if (nonHDL <= 4.1) { factor = 2.2 } else if (nonHDL <= 4.9) { factor = 2 } else if (nonHDL <= 5.6) { factor = 2 } else { factor = 2 }
        } else if (TG <= 1.24) {
            if (nonHDL <= 2.6) { factor = 2.4 } else if (nonHDL <= 3.4) { factor = 2.3 } else if (nonHDL <= 4.1) { factor = 2.2 } else if (nonHDL <= 4.9) { factor = 2.1 } else if (nonHDL <= 5.6) { factor = 2 } else { factor = 2 }
        } else if (TG <= 1.3) {
            if (nonHDL <= 2.6) { factor = 2.5 } else if (nonHDL <= 3.4) { factor = 2.4 } else if (nonHDL <= 4.1) { factor = 2.2 } else if (nonHDL <= 4.9) { factor = 2.1 } else if (nonHDL <= 5.6) { factor = 2 } else { factor = 2 }
        } else if (TG <= 1.36) {
            if (nonHDL <= 2.6) { factor = 2.5 } else if (nonHDL <= 3.4) { factor = 2.4 } else if (nonHDL <= 4.1) { factor = 2.3 } else if (nonHDL <= 4.9) { factor = 2.2 } else if (nonHDL <= 5.6) { factor = 2.1 } else { factor = 2 }
        } else if (TG <= 1.42) {
            if (nonHDL <= 2.6) { factor = 2.6 } else if (nonHDL <= 3.4) { factor = 2.4 } else if (nonHDL <= 4.1) { factor = 2.3 } else if (nonHDL <= 4.9) { factor = 2.2 } else if (nonHDL <= 5.6) { factor = 2.1 } else { factor = 2 }
        } else if (TG <= 1.49) {
            if (nonHDL <= 2.6) { factor = 2.7 } else if (nonHDL <= 3.4) { factor = 2.5 } else if (nonHDL <= 4.1) { factor = 2.3 } else if (nonHDL <= 4.9) { factor = 2.2 } else if (nonHDL <= 5.6) { factor = 2.1 } else { factor = 2 }
        } else if (TG <= 1.56) {
            if (nonHDL <= 2.6) { factor = 2.7 } else if (nonHDL <= 3.4) { factor = 2.5 } else if (nonHDL <= 4.1) { factor = 2.3 } else if (nonHDL <= 4.9) { factor = 2.3 } else if (nonHDL <= 5.6) { factor = 2.2 } else { factor = 2.1 }
        } else if (TG <= 1.65) {
            if (nonHDL <= 2.6) { factor = 2.7 } else if (nonHDL <= 3.4) { factor = 2.6 } else if (nonHDL <= 4.1) { factor = 2.4 } else if (nonHDL <= 4.9) { factor = 2.3 } else if (nonHDL <= 5.6) { factor = 2.2 } else { factor = 2.1 }
        } else if (TG <= 1.74) {
            if (nonHDL <= 2.6) { factor = 2.8 } else if (nonHDL <= 3.4) { factor = 2.6 } else if (nonHDL <= 4.1) { factor = 2.5 } else if (nonHDL <= 4.9) { factor = 2.4 } else if (nonHDL <= 5.6) { factor = 2.2 } else { factor = 2.1 }
        } else if (TG <= 1.84) {
            if (nonHDL <= 2.6) { factor = 2.9 } else if (nonHDL <= 3.4) { factor = 2.7 } else if (nonHDL <= 4.1) { factor = 2.5 } else if (nonHDL <= 4.9) { factor = 2.4 } else if (nonHDL <= 5.6) { factor = 2.3 } else { factor = 2.1 }
        } else if (TG <= 1.95) {
            if (nonHDL <= 2.6) { factor = 3 } else if (nonHDL <= 3.4) { factor = 2.8 } else if (nonHDL <= 4.1) { factor = 2.6 } else if (nonHDL <= 4.9) { factor = 2.4 } else if (nonHDL <= 5.6) { factor = 2.3 } else { factor = 2.2 }
        } else if (TG <= 2.09) {
            if (nonHDL <= 2.6) { factor = 3.1 } else if (nonHDL <= 3.4) { factor = 2.8 } else if (nonHDL <= 4.1) { factor = 2.6 } else if (nonHDL <= 4.9) { factor = 2.5 } else if (nonHDL <= 5.6) { factor = 2.3 } else { factor = 2.2 }
        } else if (TG <= 2.27) {
            if (nonHDL <= 2.6) { factor = 3.2 } else if (nonHDL <= 3.4) { factor = 2.9 } else if (nonHDL <= 4.1) { factor = 2.7 } else if (nonHDL <= 4.9) { factor = 2.5 } else if (nonHDL <= 5.6) { factor = 2.4 } else { factor = 2.3 }
        } else if (TG <= 2.49) {
            if (nonHDL <= 2.6) { factor = 3.3 } else if (nonHDL <= 3.4) { factor = 3 } else if (nonHDL <= 4.1) { factor = 2.8 } else if (nonHDL <= 4.9) { factor = 2.6 } else if (nonHDL <= 5.6) { factor = 2.4 } else { factor = 2.3 }
        } else if (TG <= 2.79) {
            if (nonHDL <= 2.6) { factor = 3.5 } else if (nonHDL <= 3.4) { factor = 3.1 } else if (nonHDL <= 4.1) { factor = 2.9 } else if (nonHDL <= 4.9) { factor = 2.7 } else if (nonHDL <= 5.6) { factor = 2.6 } else { factor = 2.4 }
        } else if (TG <= 3.3) {
            if (nonHDL <= 2.6) { factor = 3.7 } else if (nonHDL <= 3.4) { factor = 3.3 } else if (nonHDL <= 4.1) { factor = 3 } else if (nonHDL <= 4.9) { factor = 2.8 } else if (nonHDL <= 5.6) { factor = 2.7 } else { factor = 2.5 }
        } else if (TG <= 4.5) {
            if (nonHDL <= 2.6) { factor = 4.1 } else if (nonHDL <= 3.4) { factor = 3.6 } else if (nonHDL <= 4.1) { factor = 3.3 } else if (nonHDL <= 4.9) { factor = 3 } else if (nonHDL <= 5.6) { factor = 2.8 } else { factor = 2.6 }
        } else if (TG <= 158) {
            if (nonHDL <= 2.6) { factor = 5.6 } else if (nonHDL <= 3.4) { factor = 4.4 } else if (nonHDL <= 4.1) { factor = 3.8 } else if (nonHDL <= 4.9) { factor = 3.5 } else if (nonHDL <= 5.6) { factor = 3.3 } else { factor = 2.9 }
        } else { factor = 0 }
    }
    ldl = nonHDL - TG / factor;
    result = Math.round(ldl * 100) / 100;
    return result;
}