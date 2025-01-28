module.exports = {
  answer: [
    `
    #include <bits/stdc++.h>
    using namespace std;

    int main()
    {
    int number_of_element;
    cin>>number_of_element;
    vector<int> ar(number_of_element);
    
        int ans = 0;
        for(int i=0; i<ar.size(); i++){
            cin>>ar[i];
            ans += ar[i];
        }

        cout<<ans;
        return 0;

    }`,
  ],
};
