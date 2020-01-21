/*
eg: 
abcac
instances=2
n=10
(abcacabcac)
there are 2 instances of 'a' in the 5 character string
we divide 10 by 5, then multiply by 2, then add the remainder
equals 4

aba
instances=2
n=10
(abaabaabaa)
there are 2 instances of 'a' in the 3 character string
we divide 10 by 3 (rounded down), then multiply by 2, 
then add the remainder
equals 7

a
instances=1
n=100
(a*100)
there are 100 instances of 'a', in the 100 character string
we divide 100 by 100 (rounded down), then multiply by 1, 
then add the remainder
*/