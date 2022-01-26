function chamaFatorial() {
    n = parseInt(document.getElementById("numero").value);
  
    function fatorial(n) {
      if (n === 1) {
        return n;
      }
      return n * fatorial(n - 1);
    }
    document.getElementById("resposta").innerHTML = fatorial(n)
}
  

