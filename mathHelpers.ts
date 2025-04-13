export function calculateRowEchelon(matrix: number[][]): number[][][] {
  const A = matrix.map(r=>[...r]); const steps: number[][][]=[];
  let r=0; const m=A.length,n=A[0].length;
  for(let c=0;c<n&&r<m;c++){let i=r;while(i<m&&A[i][c]===0)i++;if(i===m)continue;[A[r],A[i]]=[A[i],A[r]];
    const pivot=A[r][c];for(let j=c;j<n;j++)A[r][j]/=pivot;
    for(let k=0;k<m;k++)if(k!==r){const f=A[k][c];for(let j=c;j<n;j++)A[k][j]-=f*A[r][j];}
    steps.push(A.map(r=>[...r]));r++;}
  return steps;
}