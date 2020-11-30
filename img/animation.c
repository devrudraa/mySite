#include<stdio.h>
#include<conio.h>
#include<string.h>
#include<windows.h>

int main(){
int t=200,T=1000;
char mass[]={"Welcome to My game"};
char over[]={"Press any key to exit..."};
Sleep(T);
for(int i=0;i<strlen(mass); i++){
printf("%c",mass[i]);
Sleep(t);
}
printf("\n");
for(int i=0;i<strlen(over); i++){
printf("%c",over[i]);
Sleep(t);
}
getch();
}