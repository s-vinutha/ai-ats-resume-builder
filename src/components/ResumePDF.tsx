import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

type Education = {
  degree: string;
  institution: string;
  cgpa: string;
  startYear: string;
  graduationYear: string;
};

type Project = {
  title: string;
  technologies: string[];
  description: string;
  contribution: string;
  githubLink: string;
  liveDemoLink: string;
};

type ResumeData = {
  targetRole: string;

  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;

  education: Education[];
  projects: Project[];
  skills: string[];
};

type ResumePDFProps = {
  resumeData: ResumeData;
};

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
  },

  header: {
    marginBottom: 20,
  },

  name: {
    fontSize: 22,
    marginBottom: 8,
  },

  section: {
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 14,
    marginBottom: 6,
    borderBottomWidth: 1,
    paddingBottom: 2,
  },

  item: {
    marginBottom: 8,
  },
});

export default function ResumePDF({
  resumeData,
}: ResumePDFProps) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {resumeData.fullName}
          </Text>

          <Text>
            {resumeData.email} | {resumeData.phone}
          </Text>

          <Text>{resumeData.linkedin}</Text>

          <Text>{resumeData.github}</Text>
        </View>

        {/* Target Role */}
        {resumeData.targetRole && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Target Role
            </Text>

            <Text>{resumeData.targetRole}</Text>
          </View>
        )}

        {/* Education */}
        {resumeData.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Education
            </Text>

            {resumeData.education.map(
              (edu, index) => (
                <View
                  key={index}
                  style={styles.item}
                >
                  <Text>
                    {edu.degree}
                  </Text>

                  <Text>
                    {edu.institution}
                  </Text>

                  <Text>
                    {edu.startYear} -{" "}
                    {edu.graduationYear}
                  </Text>

                  <Text>
                    CGPA: {edu.cgpa}
                  </Text>
                </View>
              )
            )}
          </View>
        )}

        {/* Projects */}
        {resumeData.projects.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Projects
            </Text>

            {resumeData.projects.map(
              (project, index) => (
                <View
                  key={index}
                  style={styles.item}
                >
                  <Text>
                    {project.title}
                  </Text>

                  <Text>
                    Technologies:{" "}
                    {project.technologies.join(
                      ", "
                    )}
                  </Text>

                  <Text>
                    {project.description}
                  </Text>

                  <Text>
                    Contribution:{" "}
                    {project.contribution}
                  </Text>
                </View>
              )
            )}
          </View>
        )}

        {/* Skills */}
        {resumeData.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              Skills
            </Text>

            <Text>
              {resumeData.skills.join(", ")}
            </Text>
          </View>
        )}
      </Page>
    </Document>
  );
}