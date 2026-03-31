
package main;

import java.util.Random;
import static main.Szinek.KEK;
import static main.Szinek.PIROS;
import static main.Szinek.ZOLD;

public class Csiga {
    public static final String ANSI_RESET = "\u001B[0m";
    public static final String ANSI_PIROS = "\u001B[31m";
    public static final String ANSI_KEK = "\u001B[34m";
    public static final String ANSI_ZOLD = "\u001B[32m";
    
    private Szinek szin;

    public enum Stilusok{FOLYAMATOS, DUPLA}
    private Stilusok stilus;
    
    private int tavolsag;
    private Random rand;
    private String nyomvonal = "";

    public Csiga(Szinek szin) {
        this(szin, Stilusok.FOLYAMATOS, 0, "");
    }

    public Csiga(Szinek szin, Stilusok stilus, int tavolsag, String nyomvonal) {
        this.szin = szin;
        this.stilus = stilus;
        this.tavolsag = tavolsag;
        this.nyomvonal = nyomvonal;
        this.rand = new Random();
    }

    public Szinek getSzin() {
        return szin;
    }

    public Stilusok getStilus() {
        return stilus;
    }

    public int getTavolsag() {
        return tavolsag;
    }
    
    public void lepes(){
        int lepes = rand.nextInt(4);
        int aktualisLepes;
        boolean kapGyorsitot = false;
        
        if(rand.nextInt(100) < 20){
            aktualisLepes = (lepes *2);
            kapGyorsitot = true;
        } else {
            aktualisLepes = lepes;
        }
        
        for (int i = 0; i < aktualisLepes; i++) {
            if (kapGyorsitot) {
                nyomvonal += "=";
            } else {
                nyomvonal += "-";
            }
        }
        
        tavolsag += aktualisLepes;
    }

    public void kiRajzol() {
        String kod = szinKod();
        System.out.println(kod + nyomvonal + "🐌" + ANSI_RESET);
    }
    
    public String szinKod(){
        String kod;
        switch(szin){
            default -> kod = Csiga.ANSI_RESET;
            case KEK -> kod = Csiga.ANSI_KEK;
            case ZOLD -> kod = Csiga.ANSI_ZOLD;
            case PIROS -> kod = Csiga.ANSI_PIROS;
        }
        return kod;
    }
}
