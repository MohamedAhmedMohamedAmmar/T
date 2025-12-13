import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Scanner;

class ResourceManager {

    ArrayList<Resource> resources = new ArrayList<>();
    void addResource(Resource r) {
        resources.add(r);
    }

     public void saveToFile() {
        try (PrintWriter writer = new PrintWriter(new FileWriter("date.txt"))) {

            for (Resource r : resources) {

                if (r instanceof WaterResource) {
                    WaterResource w = (WaterResource) r;

                    writer.println("Water");
                    writer.println(w.getId());
                    writer.println(w.getName());
                    writer.println(w.getAmount());
                    writer.println(w.getSource());
                    writer.println();
                }

                else if (r instanceof EnergyResource) {
                    EnergyResource e = (EnergyResource) r;

                    writer.println("Energy");
                    writer.println(e.getId());
                    writer.println(e.getName());
                    writer.println(e.getAmount());
                    writer.println(e.getType());
                    writer.println(e.getEmissionFactor());
                    writer.println();
                }
            }

        } catch (IOException e) {
            System.out.println("Error saving file: " + e.getMessage());
        }
    }

    public void loadFromFile() {
    resources.clear();

    File file = new File("date.txt");

    try {
        Scanner sc = new Scanner(file);

        while (sc.hasNextLine()) {
            String type = sc.nextLine();
            String id = sc.nextLine();
            String name = sc.nextLine();
            double amount = sc.nextDouble();
            sc.nextLine(); 
            String extra1 = sc.nextLine();

            if (type.equals("Water")) {
                WaterResource w = new WaterResource(id, name, amount, extra1);
                resources.add(w);
            } else if (type.equals("Energy")) {
                double extra2 = sc.nextDouble();
                sc.nextLine(); 
                EnergyResource e = new EnergyResource(id, name, amount, extra1, extra2);
                resources.add(e);
            }
        }

        sc.close();

    } catch (FileNotFoundException e) {
        System.out.println("File not found");
    } catch (Exception e) {
        System.out.println("Error loading file: " + e.getMessage());
    }
}




}