import org.openapitools.generator.gradle.plugin.tasks.GenerateTask

plugins {
    id("org.openapi.generator") version "7.3.0"
}

val apiDescription = "${projectDir}/api/service.yaml"
val buildDir = file(layout.buildDirectory.asFile)
val srcDir = file("$projectDir/app/api/")
version = "1.0.0"


tasks.register<GenerateTask>("generateServiceApi") {
    group = "build"

    inputs.file(file(apiDescription))

    generatorName.set("typescript-axios")
    inputSpec.set(apiDescription)
    outputDir.set("$buildDir/generated")
    configOptions.set( mapOf(
        "disallowAdditionalPropertiesIfNotPresent" to "false",
    ) )

}

tasks.register("copyGeneratedApi") {
    group = "build"

    dependsOn("generateServiceApi")

    doLast{

        copy{
            from(file("$buildDir/generated")) {
                include("*.ts")
            }
            into(file("$srcDir"))
        }

    }
}
